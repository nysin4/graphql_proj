import { Vertex } from "./vertex";

class Edge {
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

export { Edge };