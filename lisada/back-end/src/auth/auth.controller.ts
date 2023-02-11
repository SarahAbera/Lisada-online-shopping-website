import { Body, ClassSerializerInterceptor, Controller, Inject, Post, UseInterceptors } from "@nestjs/common";
import { User } from "src/users/entities";
import { AuthService } from "./auth.service";
import { CreateUserDto, LoginDto } from "./dto/create-auth.dto";

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: CreateUserDto): Promise<User | never> {
    return this.service.register(body);
  }

  @Post('login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    return this.service.login(body);
  }

}