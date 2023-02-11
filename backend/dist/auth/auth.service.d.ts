import { User } from "src/users/entities";
import { CreateUserDto, LoginDto } from "./dto/create-auth.dto";
export declare class AuthService {
    private readonly repository;
    private readonly helper;
    register(body: CreateUserDto): Promise<User | never>;
    login(body: LoginDto): Promise<string | never>;
}
