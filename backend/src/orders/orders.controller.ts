import { Body, Controller, Get } from "@nestjs/common";
import { CreateOrderDto } from "./dto/order.dto";
import { OrdersService } from "./orders.service";


@Controller("orders")
export class OrdersController {


    constructor (
        private readonly ordersService:OrdersService
    ){

    }


@Get("all")

getAllOrders(@Body() createOrderDto:CreateOrderDto){
    return this.ordersService.getallOrder();
}


@Get("mineOrder")

getOrders(){}


}