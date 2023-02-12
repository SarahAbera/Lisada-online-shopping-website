import { Trim } from "class-sanitizer";
import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/RBAC/role.enum";


export class CreateUserDto {
    @Trim()
    @IsNotEmpty()
    @MinLength(4)
    @IsString()
    username: string;

    @Trim()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

    @Trim()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    roles: Role;


}

// login dto
export class LoginDto {
    @Trim()
    @IsEmail()
    public readonly email: string;
    
    @IsString()
    public readonly password: string;
}
