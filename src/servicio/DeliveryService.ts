import {RestauranteGateway} from "../gateway/RestauranteGateway";

export class DeliveryService {

    public recibePedido(pedido : string) : string{

        const restaurante : RestauranteGateway = new RestauranteGateway();
        const comida : string = restaurante.solicitarComida(pedido);
        return comida;
    }
}