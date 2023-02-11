import { isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClothDto {

    @IsNotEmpty()
    @IsString()
    clothtype: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsString()
    origin: string


    @IsString()
    @IsOptional()

    profile_id: number


}

