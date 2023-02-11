import { CanActivate, Type } from "@nestjs/common";
import { Role } from "./role.enum";
declare const RolesGuard: (role: Role) => Type<CanActivate>;
export default RolesGuard;
