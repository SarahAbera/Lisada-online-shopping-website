import { Trim } from "class-sanitizer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/RBAC/role.enum";
import { Column } from "typeorm";

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


    @Column({
        type : 'enum',
        enum : Role,
        default : Role.User

    })

    roles : Role;


}

// login dto
export class LoginDto {
    @Trim()
    @IsEmail()
    public readonly email: string;

    @IsString()
    public readonly password: string;
}