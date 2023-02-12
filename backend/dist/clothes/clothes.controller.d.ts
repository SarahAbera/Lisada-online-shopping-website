/// <reference types="multer" />
import { ClothesService } from './clothes.service';
import { CreateClothDto } from './dto/create-clothe.dto';
import { UpdateClothDto } from './dto/update-clothe.dto';
import { Observable } from 'rxjs';
export declare class ClothesController {
    private readonly clothesService;
    constructor(clothesService: ClothesService);
    create(createClothDto: CreateClothDto): Promise<CreateClothDto & import("./entities/clothe.entity").Cloth>;
    findAll(): Promise<import("./entities/clothe.entity").Cloth[]>;
    findOne(id: string): Promise<import("./entities/clothe.entity").Cloth>;
    update(id: string, updateClotheDto: UpdateClothDto): Promise<import("./entities/clothe.entity").Cloth>;
    DeleteCloth(id: string): Promise<import("typeorm").DeleteResult>;
    AddProfile(file: Express.Multer.File): Promise<{
        uploaded: boolean;
        path: string;
    }>;
    Download(response: any): Observable<Object>;
}
