
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"






export class UpdateClothDto {


    @IsNumber()
    @IsNotEmpty()
    readonly price: number

    @IsString()
    @IsNotEmpty()

    description: string;

}


export class UpdateClothProfile {
    @IsNumber()
    @IsNotEmpty()

    id: number
}