


import { Get, Body, Param, Delete, Put, UseGuards, Req, Inject, Controller } from '@nestjs/common';
import { UsersService } from './users.service';


import { DeleteAccountDto, UpdatePasswordDto } from './dto/update-user.dto';


import { User } from './entities';

import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/Auth.guard';

import { Role } from 'src/RBAC/role.enum';
import RolesGuard from 'src/RBAC/roles.guard';









@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private readonly usersService: UsersService;


  @Get()
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.getFilteredRepsonseUser(+id);
  }


  @Delete("delete")
  @UseGuards(RolesGuard(Role.User))
  @UseGuards(JwtAuthGuard)

  DeleteAccount(@Body() body: DeleteAccountDto, @Req() req: Request) {
    return this.usersService.DeleteAccount(body, req);
  }


  @Put("password")

  @UseGuards(JwtAuthGuard)

  UpdatePassword(@Body() body: UpdatePasswordDto, @Req() req: Request): Promise<User> {
    return this.usersService.UpdatePassword(body, req);
  }

  @Delete(":id")
  @UseGuards(RolesGuard(Role.Admin))
  @UseGuards(JwtAuthGuard)

  delete(@Param('id') id: string) {
    return this.usersService.DeleteuserById(+id);
  }


}
