import { CreateOrderDto } from "./dto/order.dto";
import { Orders } from "./entities/orders.entity";
export declare class OrdersService {
    private readonly orderRepository;
    getallOrder(): Promise<Orders[]>;
    getOrders(createorderDto: CreateOrderDto): Promise<CreateOrderDto & Orders>;
}
