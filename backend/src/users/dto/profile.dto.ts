import { IsNumber, IsString } from "class-validator";


export class ProfileDto {
    @IsNumber()
    public readonly id: number;
}