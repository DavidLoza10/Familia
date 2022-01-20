import {Persona} from "./Persona";
import {Hijo} from "./Hijo";

export class Abuelo {

    private _personas : Persona [] = [];
    private _nombre : string;
    private _apellido : string;

    constructor(nombre: string, apellido: string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    public todasPersonas (personas : Persona[]) : void{
        this._personas = personas;
    }
}