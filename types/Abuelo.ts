import {Persona} from "./Persona";
import {Hijo} from "./Hijo";

export class Abuelo {

    private _personass : Persona [] = [];
    /*private _nombre : string;
    private _apellido : string;*/


    /*constructor(nombre: string, apellido: string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }*/



    get personass(): Persona[] { return this._personass; }

    set personass(value: Persona[]) { this._personass = value; }

    todasPersonas (hijo : Hijo[],person : Persona[]) : void{
        console.log(person,hijo);
    }
}