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

const persona1 : Persona = new Persona("David","Loza");
const persona2 : Persona = new Persona("Edwin", "Garzón");

const hijo1 : Hijo = new Hijo("Mago","Merlin");
const hijo2 : Hijo = new Hijo("Tsubasa","Ózora");

//const abuelo1 : Abuelo = new Abuelo("Anciano","Loza");

const hijos : Hijo[] = [];
hijos.push(hijo1);
hijos.push(hijo2);

const personas : Persona [] = [];
personas.push(persona1);
personas.push(persona2);

const todo : Persona[]=[];

const abuelo : Abuelo = new Abuelo();
abuelo.todasPersonas(hijos,personas);