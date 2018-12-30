/**
 * Code to read schema from file with .graphql extension, define queries and mutations.
 * 
 * @author Nok Yiu, SIN
 * @since December 30, 2018
 * @version
 */

var fs = require('fs');
var path = require('path');

// read graphql schema
exports.typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql")).toString("UTF-8");

// define resolvers function
exports.resolvers = {

};