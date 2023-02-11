import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';


import { AuthModule } from 'src/auth/auth.module';
import { AuthHelper } from 'src/auth/Auth.Helper';
import { JwtService } from '@nestjs/jwt';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UsersController],
  providers: [UsersService,AuthHelper,JwtService]
})
export class UsersModule { }
