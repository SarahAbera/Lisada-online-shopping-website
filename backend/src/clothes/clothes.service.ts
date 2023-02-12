import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



import { Cloth } from './entities/clothe.entity';

import { UpdateClothDto, UpdateClothProfile } from './dto/update-clothe.dto';
import { CreateClothDto } from './dto/create-clothe.dto';



@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Cloth)
    private readonly clothRepository: Repository<Cloth>,

  ) { }



  async create(createClotheDto: CreateClothDto) {


    return await this.clothRepository.save(createClotheDto);
  }

  async findAll() {
    return await this.clothRepository.find();
  }

  async findOne(id: number) {
    return await this.clothRepository.findOneBy({ id });
  }

  async updateCloth(id: number, updateClothDto: UpdateClothDto) {
    let user = await this.findOne(id);

    user.description = updateClothDto.description;
    user.price = updateClothDto.price;


    return await this.clothRepository.save(user);
  }

  async DeleteCloth(id: number) {
    return await this.clothRepository.delete(id);
  }




  // add avator or profile for cloth

  async UploadClothProfile( buffer: Buffer, fileName: string) {
    

  }




}
