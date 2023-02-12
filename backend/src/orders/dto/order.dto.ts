import {IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto{
    @IsNumber()
    @IsNotEmpty()

    user_id:number
   

    @IsNumber()
    @IsNotEmpty()

    cloth_id:number


}