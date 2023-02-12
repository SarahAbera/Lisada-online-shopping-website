/// <reference types="node" />
import { Repository } from 'typeorm';
import { Cloth } from './entities/clothe.entity';
import { UpdateClothDto } from './dto/update-clothe.dto';
import { CreateClothDto } from './dto/create-clothe.dto';
export declare class ClothesService {
    private readonly clothRepository;
    constructor(clothRepository: Repository<Cloth>);
    create(createClotheDto: CreateClothDto): Promise<CreateClothDto & Cloth>;
    findAll(): Promise<Cloth[]>;
    findOne(id: number): Promise<Cloth>;
    updateCloth(id: number, updateClothDto: UpdateClothDto): Promise<Cloth>;
    DeleteCloth(id: number): Promise<import("typeorm").DeleteResult>;
    UploadClothProfile(buffer: Buffer, fileName: string): Promise<void>;
}
