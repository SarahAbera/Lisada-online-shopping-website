import { CreateOrderDto } from "./dto/order.dto";
import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(createOrderDto: CreateOrderDto): Promise<import("./entities/orders.entity").Orders[]>;
    getOrders(): void;
}
