import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "src/users/entities";
import { Repository } from "typeorm";
import { AuthHelper } from "./Auth.Helper";
import { CreateUserDto, LoginDto } from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: CreateUserDto): Promise<User | never> {
    const { username, email, password, roles }: CreateUserDto = body;
    let user: User = await this.repository.findOne({ where: { email } });

    // check if email is taken

    if (user) {
      throw new HttpException('Email Taken', HttpStatus.CONFLICT);
    }

    // check if username is unique

    let isUsernameExist: User = await this.repository.findOne({ where: { username } })

    if (isUsernameExist) {

      throw new HttpException("username already exist", HttpStatus.CONFLICT);

    }

    user = new User();

    user.username = username;
    user.email = email;
    user.password = this.helper.encodePassword(password);

    user.roles = roles;

    let newUser = await this.repository.save(user);


    let users = new User();

    users.email = newUser.email;

    users.id = newUser.id;

    users.username = newUser.username;
    
    return users;


  }

  public async login(body: LoginDto): Promise<string | never> {
    const { email, password }: LoginDto = body;
    const user: User = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }



    return this.helper.generateToken(user);
  }




}
