import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { AuthHelper } from 'src/auth/Auth.Helper';


import { Repository } from 'typeorm';

import { DeleteAccountDto, UpdatePasswordDto } from './dto/update-user.dto';
import { UserDtoResponse } from './dto/user-dto-Response';
import { User } from './entities';



@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;


  @Inject(AuthHelper)

  private readonly helper: AuthHelper;



  public async findUserById(id: number): Promise<User | never> {
    return this.userRepository.findOneBy({ id });
  }

  public async getFilteredRepsonseUser(id: number): Promise<UserDtoResponse | never> {
    let user = await this.findUserById(id);
    let userResponse = new UserDtoResponse();

    userResponse.username = user.username;
    userResponse.email = user.email;

    userResponse.id = user.id;

    return userResponse;

  }

  public async getUsers(): Promise<UserDtoResponse[] | never> {
    let users: User[];
    users = await this.userRepository.find();


    let userResponse: UserDtoResponse[] = [];


    for (var i = 0; i < users.length; i++) {
      let user = users[i];
      let filterUser: UserDtoResponse;
      filterUser = this.FilterReponse(user);
      
        userResponse.push(filterUser);
      
    }


    return userResponse;
  }



  DeleteuserById(id: number) {

      return this.userRepository.delete({ id });
  }


  DeleteAccount(body: DeleteAccountDto, req: Request) {

    const user = <User>req.user;

    let isPasswordRight = this.helper.isPasswordValid(body.oldpassword, user.password);
    if (!isPasswordRight) {
      throw new HttpException("wrong password", HttpStatus.BAD_REQUEST);
    }


    let userid = user.id;

    if (isNaN(userid)) {

      throw new HttpException("invalid link", HttpStatus.BAD_GATEWAY);

    }

    return this.delete(+userid);
  }


  delete(id: number) {
    return this.userRepository.delete({ id });
  }





  FilterReponse(user: User): UserDtoResponse {

    let userResponse = new UserDtoResponse();

    userResponse.email = user.email;

    userResponse.id = user.id;

    userResponse.username = user.username;

    return userResponse;


  }


  // update password

  public async UpdatePassword(body: UpdatePasswordDto, req: Request): Promise<any> {


    const user: User = <User>req.user;



    let isOldPasswordRight = this.helper.isPasswordValid(body.oldpassword, user.password);

    if (!isOldPasswordRight) {
      throw new HttpException("the password is not correct", HttpStatus.CONFLICT);
    }

    user.password = this.helper.encodePassword(body.password);

    return this.userRepository.save(user);


  }








}
