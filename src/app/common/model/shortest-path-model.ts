module ShortestPathModel {
    export class Vertex {
        private _name: string;
        private _xCord: number;
        private _yCord: number;

        constructor(name: string, xCord: number, yCord: number) {
            this._name = name;
            this._xCord = xCord;
            this._yCord = yCord;
        }

        public get name(): string {
            return this._name;
        }

        public get xCord(): number {
            return this._xCord;
        }

        public get yCord(): number {
            return this._yCord;
        }
    }

    export class Edge {
        private _startNode: Vertex;
        private _endNode: Vertex;
        private _length: number;

        constructor(startNode: Vertex, endNode: Vertex, length: number) {
            this._startNode = startNode;
            this._endNode = endNode;
            this._length = length;
        }

        public get startNode(): Vertex {
            return this._startNode;
        }

        public get endNode(): Vertex {
            return this._endNode;
        }

        public get length(): number {
            return this._length;
        }
    }

    export class Graph {
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
    }
}