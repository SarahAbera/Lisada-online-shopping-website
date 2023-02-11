import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseGuards, ParseIntPipe, UseInterceptors, MaxFileSizeValidator, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { CreateClothDto, } from './dto/create-clothe.dto';
import { UpdateClothDto } from './dto/update-clothe.dto';

import { Express } from 'express';
import RolesGuard from 'src/RBAC/roles.guard';
import { JwtAuthGuard } from 'src/auth/Auth.guard';
import { Role } from 'src/RBAC/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';



@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) { }




  @Post()
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)


  // create cloth by admin 

  create(@Body() createClothDto: CreateClothDto) {
    return this.clothesService.create(createClothDto);
  }


  // get all cloths by admin
  @Get()
  @UseGuards(RolesGuard(Role.Admin))

  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.clothesService.findAll();
  }


  // get single cloth by Id  
  @Get(':id')
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)

  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.clothesService.findOne(+id);
  }


  // update cloth
  @Patch(':id')
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)

  update(@Param('id', ParseIntPipe) id: string, @Body() updateClotheDto: UpdateClothDto) {
    return this.clothesService.updateCloth(+id, updateClotheDto);
  }


  // delete cloth by using id 
  @Delete(':id')
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)

  DeleteCloth(@Param('id', ParseIntPipe) id: string) {
    return this.clothesService.DeleteCloth(+id);
  }




  // profile cloth controller
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)

  @Post('/profile')

  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: 'uploads',
      filename: (req, file, callback) => {
        const uniqueSufix =
          Date.now() + "-" + Math.round(Math.random() * 1e9);

        const ext = extname(file.originalname);

        const fileOrgName = file.originalname

        const fileName = `${fileOrgName.split(".",1)}-${uniqueSufix}${ext}`;
      
        callback(null,fileName);

      }
    })
  }))

  async AddProfile(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'image/jpeg' }),
      ],
    }),

  ) file: Express.Multer.File) {

    return file.filename;
  }
}
