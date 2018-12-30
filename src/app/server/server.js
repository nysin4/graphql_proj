/**
 * Code to start server which uses neo4j as database graphql as query language.
 * 
 * @author Nok Yiu, SIN
 * @since December 30, 2018
 * @version
 */

// =====================================================================
// import required modules from other files
// =====================================================================

// log4j
var log4js = require('log4js');
var logger = log4js.getLogger('[Server]');
logger.level = 'all';

// properties utils
var { setPath, getProperty } = require('../common/utils/properties-utils');
setPath(__dirname + '/resource/server.properties');

// neo4j driver
var neo4j = require('neo4j-driver').v1;

// Apollo Server 
var { ApolloServer, makeExecutableSchema } = require('apollo-server');

// =====================================================================
// load schema and define start server function
// =====================================================================

(function() {
    // compile schema
    var { typeDefs, resolvers } = require('./schema');
    var executableSchema = makeExecutableSchema({ 
        typeDefs
    });

    // initialize neo4j driver
    var neo4jUrl = 'bolt://'
        + getProperty('neo4j-server.host') + ':' 
        + getProperty('neo4j-server.port') + '/'; 
    const neo4jDriver = neo4j.driver(
        neo4jUrl, 
        neo4j.auth.basic(
            getProperty('neo4j-server.username'), 
            getProperty('neo4j-server.password')
        )
    );

    // initialize graphql server
    var gqlPort = getProperty('apollo-server.port');
    var gqlSsl = (getProperty('apollo-server.ssl') === 'true') ? 's' : '';
    var graphqlUrl = 'http' + gqlSsl + '://' 
            + getProperty('apollo-server.host') + ':' + gqlPort + '/';
    const _server = new ApolloServer({ 
        context: { neo4jDriver }, 
        schema: executableSchema, 
        resolvers: resolvers
    });

    /**
     * Start apollo server
     */
    exports.start = () => {
        _server.listen(gqlPort).then(() =>  {
            logger.info('Connected to Neo4j database at ' + neo4jUrl);
            logger.info('Running a GraphQL server at ' + graphqlUrl)
        });
    }
}());