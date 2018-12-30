import { Vertex } from "./vertex";
import { Edge } from './edge';

class Graph {
    private _vertexes: Array<Vertex>;
    private _edges: Array<Edge>;

    constructor() {
        this._vertexes = new Array();
        this._edges = new Array();
    }

    public get vertexes(): Array<Vertex> {
        return this._vertexes;
    }

    public addVertex(vertex: Vertex) {
        this._vertexes.push(vertex);
    }

    public getNumOfVertexes(): number {
        return this._vertexes.length;
    }

    public get edges() {
        return this._edges;
    }

    public addDirectedEdge(edge: Edge) {
        this._edges.push(edge);
    }

    public getNumOfEdges(): number {
        return this._edges.length;
    }

    /**
     * @param graph the graph object
     * @param startNode the start node
     * @param endNode the end node
     */
    public findShortestPath(startNode: Vertex, endNode: Vertex) : Array<Edge> {
        console.log('Start finding shortest path...');

        let distances = {};

        // Stores the reference to previous nodes
        let prev = {};

        let numOfVertexes = this._vertexes.length;
        let pq = new Array(numOfVertexes * numOfVertexes);

        // Set distances to all nodes to be infinite except startNode
        distances[startNode.name] = 0;
        pq.push(startNode, 0);

        this._vertexes.forEach(vertex => {
            if (vertex !== startNode) { 
                distances[vertex.name] = Infinity;  // using vertex name as array indexer
            }
            prev[vertex.name] = null;
        });

        while (!(pq.length > 0)) {
            let minNode = pq.pop();
            let currNode = minNode.name;
            
            this._edges.forEach(neighbor => {
                let alt = distances[currNode] + neighbor.length;
                if (alt < distances[neighbor.startNode.name]) {
                    distances[neighbor.startNode.name] = alt;
                    prev[neighbor.startNode.name] = currNode;
                    pq.push(neighbor.startNode.name, distances[neighbor.startNode.name]);
                }
            });
        }
        return null;
    };
}

export { Graph };


console.log('Initializing vertexes...');

let vertexA = new Vertex("A", 0, 0); 
let vertexB = new Vertex("B", 0, 0); 
let vertexC = new Vertex("C", 0, 0); 
let vertexD = new Vertex("D", 0, 0); 
let vertexE = new Vertex("E", 0, 0); 
let vertexF = new Vertex("F", 0, 0); 
let vertexG = new Vertex("G", 0, 0); 

console.log('Initializing graph...');
let graph = new Graph();
graph.addVertex(vertexA);
graph.addVertex(vertexB);
graph.addVertex(vertexC);
graph.addVertex(vertexD);
graph.addVertex(vertexE);
graph.addVertex(vertexF);
graph.addVertex(vertexG);

console.log('Number of vertex = ' + graph.getNumOfVertexes());

console.log('Initializing edges...');

graph.addDirectedEdge(new Edge(vertexA, vertexC, 100));
graph.addDirectedEdge(new Edge(vertexA, vertexB, 3));
graph.addDirectedEdge(new Edge(vertexA, vertexD, 4));
graph.addDirectedEdge(new Edge(vertexD, vertexC, 3));
graph.addDirectedEdge(new Edge(vertexD, vertexE, 8));
graph.addDirectedEdge(new Edge(vertexE, vertexF, 10));
graph.addDirectedEdge(new Edge(vertexB, vertexG, 9));
graph.addDirectedEdge(new Edge(vertexE, vertexG, 50));

console.log('Number of edges = ' + graph.getNumOfEdges());

console.log('Result: ' + graph.findShortestPath( vertexA, vertexG));