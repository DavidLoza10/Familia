import {Persona} from "../types/Persona";
import {DeliveryService} from "./servicio/DeliveryService";
import {Abuelo} from "../types/Abuelo";
import {Hijo} from "../types/Hijo";

console.log("Este es mi main");

/*const persona : Persona = new Persona();

const servicioDelivery : DeliveryService = new DeliveryService();

const pedido : string = persona.quieroComer();

const comidaLista : string = servicioDelivery.recibePedido(pedido);

persona.comer(comidaLista);*/

const persona1 : Persona = new Persona("Edwin","Loza");
const persona2 : Persona = new Persona("Gloria", "Garzón");

const hijo1 : Hijo = new Hijo("David","Loza");
const hijo2 : Hijo = new Hijo("Daniel","Loza");
const hijo3 : Hijo = new Hijo("Mickel","Loza");

const datosAbuelo : Abuelo = new Abuelo("Deifilio","Garzón");

const hijos : Hijo[] = [];
hijos.push(hijo1);
hijos.push(hijo2);
hijos.push(hijo3);

persona1.hijitos(hijos);
persona2.hijitos(hijos);

const personas : Persona [] = [];
personas.push(persona1);
personas.push(persona2);
console.log(persona1);
console.log(persona2);
console.log("");

datosAbuelo.todasPersonas(personas);

console.log(datosAbuelo);