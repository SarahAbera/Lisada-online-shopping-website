import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseGuards, ParseIntPipe, UseInterceptors, FileTypeValidator, ParseFilePipe, Res, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { CreateClothDto, } from './dto/create-clothe.dto';
import { ProfileURL, UpdateClothDto } from './dto/update-clothe.dto';

import { Express, Response } from 'express';
import RolesGuard from 'src/RBAC/roles.guard';
import { JwtAuthGuard } from 'src/auth/Auth.guard';
import { Role } from 'src/RBAC/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';
import { extname, join } from 'path';

import { readFileSync } from 'fs';
import { Observable, of } from 'rxjs';



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

  @Post('/profile/upload')



  @UseInterceptors(FileInterceptor('file', {
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|JPG|PNG|JPEG|WEBP)$/))
        cb(null, true);
      else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
    },

    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSufix =
          Date.now() + "-" + Math.round(Math.random() * 1e9);

        const ext = extname(file.originalname);

        const fileNameor = "lisada"


        const fileName = `${fileNameor}-${uniqueSufix}${ext}`;

        callback(null, fileName);

      }
    })
  }))

  async AddProfile(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
      ],
    }),

  ) file: Express.Multer.File) {

    return { uploaded: true, path: file.filename };
  }



  @Get('profile/download')
  @HttpCode(200)
  // @UseGuards(RolesGuard(Role.Admin))
  // @UseGuards(JwtAuthGuard)

   Download (@Res() response) :Observable<Object> {

  response.contentType("jpg")
  try {
    const file = join(process.cwd(), "./uploads/lisada-1676224300687-378351015.jpg");
    return of(response.sendFile(file));
  } catch (error) {
    throw new HttpException("profile not found, check your path", HttpStatus.NOT_FOUND);
  }


}



}
