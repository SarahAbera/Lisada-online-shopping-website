import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrderDto } from "./dto/order.dto";
import { Orders } from "./entities/orders.entity";

import { Repository } from 'typeorm';

@Injectable()

export class OrdersService {


    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>;

    getallOrder() {
        return this.orderRepository.find();


    }

    getOrders(createorderDto:CreateOrderDto){
        return this.orderRepository.save(createorderDto);
    }
}