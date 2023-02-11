import { DeleteAccountDto, UpdatePasswordDto } from './dto/update-user.dto';
import { User } from './entities';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    findAll(): Promise<import("./dto/user-dto-Response").UserDtoResponse[]>;
    findOne(id: string): Promise<import("./dto/user-dto-Response").UserDtoResponse>;
    DeleteAccount(body: DeleteAccountDto, req: Request): Promise<import("typeorm").DeleteResult>;
    UpdatePassword(body: UpdatePasswordDto, req: Request): Promise<User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
