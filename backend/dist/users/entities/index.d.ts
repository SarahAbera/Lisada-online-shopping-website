import { Cloth } from "src/clothes/entities/clothe.entity";
import { User } from "./user.entity";
declare const entities: (typeof Cloth | typeof User)[];
export { User, Cloth };
export default entities;
