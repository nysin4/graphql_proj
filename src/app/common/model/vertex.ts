class Vertex {
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

export { Vertex };