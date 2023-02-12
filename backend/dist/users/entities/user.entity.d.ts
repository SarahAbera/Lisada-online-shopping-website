import { Role } from "src/RBAC/role.enum";
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: Role;
}
