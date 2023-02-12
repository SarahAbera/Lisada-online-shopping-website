
import { IsNotEmpty, IsNumber, IsOptional, isString, IsString } from "class-validator"






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



export class ProfileURL {
    @IsString()
    @IsNotEmpty()

    profile_url:string    
}