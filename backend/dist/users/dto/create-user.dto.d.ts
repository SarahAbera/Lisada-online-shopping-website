import { Role } from "src/RBAC/role.enum";
export declare class CreateUserDto {
    username: string;
    password: string;
    email: string;
    roles: Role;
}
export declare class LoginDto {
    readonly email: string;
    readonly password: string;
}
