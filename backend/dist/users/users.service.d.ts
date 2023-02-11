import { Request } from 'express';
import { DeleteAccountDto, UpdatePasswordDto } from './dto/update-user.dto';
import { UserDtoResponse } from './dto/user-dto-Response';
import { User } from './entities';
export declare class UsersService {
    private readonly userRepository;
    private readonly helper;
    findUserById(id: number): Promise<User | never>;
    getFilteredRepsonseUser(id: number): Promise<UserDtoResponse | never>;
    getUsers(): Promise<UserDtoResponse[] | never>;
    DeleteuserById(id: number): Promise<import("typeorm").DeleteResult>;
    DeleteAccount(body: DeleteAccountDto, req: Request): Promise<import("typeorm").DeleteResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    FilterReponse(user: User): UserDtoResponse;
    UpdatePassword(body: UpdatePasswordDto, req: Request): Promise<any>;
}
