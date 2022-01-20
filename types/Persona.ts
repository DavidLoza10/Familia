import {Hijo} from "./Hijo";

export class Persona {
    private _nombre : string; // = "David"
    private _apellido : string // = "Loza";
    private _hijos : Hijo[] = []; // [hijo1, hijo2]

    constructor(nombre : string, apellido : string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get hijos(): Hijo[] { return this._hijos; }

    set hijos(value: Hijo[]) { this._hijos = value; }

    public hijitos (hijos : Hijo[]) : void{
        this._hijos = hijos;
    }

    public quieroComer() : string{
        return "Hamburguesa";
    }
    public comer (comida : string) : void{
        console.log("Estoy Comiendo "+comida);
    }

    get nombre(): string { return this._nombre; }

    set nombre(value: string) { this._nombre = value; }

    get apellido(): string { return this._apellido; }

    set apellido(value: string) { this._apellido = value; }


}