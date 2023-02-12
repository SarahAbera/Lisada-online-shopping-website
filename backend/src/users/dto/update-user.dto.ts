import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";



export class UpdatePasswordDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(8)

    public readonly oldpassword: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    public readonly password?: string;
}
export class DeleteAccountDto {
    @IsString()
    public readonly oldpassword: string;
}