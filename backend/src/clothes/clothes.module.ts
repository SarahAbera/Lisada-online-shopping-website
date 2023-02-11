import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cloth } from './entities/clothe.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([Cloth],
      
      )
  ],
  controllers: [ClothesController],
  providers: [ClothesService]
})
export class ClothesModule { }
