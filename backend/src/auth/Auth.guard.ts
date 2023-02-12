import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard, IAuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { User } from "src/users/entities";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const { user }: Request = context.switchToHttp().getRequest();

    return user ? true : false;
  }
}