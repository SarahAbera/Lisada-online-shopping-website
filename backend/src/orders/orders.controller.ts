import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { User } from "src/users/entities";
import { CreateOrderDto } from "./dto/order.dto";
import { Orders } from "./entities/orders.entity";
import { OrdersService } from "./orders.service";


@Controller("orders")
export class OrdersController {


    constructor(
        private readonly ordersService: OrdersService
    ) {

    }



    @Post()

    CreateOrder(@Body() createOrderDto: CreateOrderDto):Promise<Orders|never>{
        return this.ordersService.createOrder(createOrderDto);
    }

    @Get()

    getAllOrders() {
        return this.ordersService.getallOrder();
    }


    @Get("mineOrder")

    getOrders(@Req() req): Promise<Orders | never> {

        const user = <User>req.user;

        return this.ordersService.getorderbyUserId(user.id);

    }


}