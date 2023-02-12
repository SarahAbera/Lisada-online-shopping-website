import { Cloth } from "src/clothes/entities/clothe.entity";
import { Orders } from "src/orders/entities/orders.entity";
import { User } from "./user.entity";
declare const entities: (typeof Cloth | typeof Orders | typeof User)[];
export { User, Cloth, Orders };
export default entities;
