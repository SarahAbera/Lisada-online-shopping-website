import { CanActivate, ExecutionContext, mixin, Type } from "@nestjs/common";

import { Role } from "./role.enum";

// @Injectable()
const RolesGuard = (role: Role): Type<CanActivate> => {
    class RoleGuardMixin implements CanActivate {
      canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
   
        return user?.roles.includes(role);
      }
    }
   
    return mixin(RoleGuardMixin);
  }
   
  export default RolesGuard;











// export class RolesGuard implements CanActivate {
//     constructor(private reflector: Reflector) { }

//     canActivate(context: ExecutionContext): boolean {
//         const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
//             context.getHandler(),
//             context.getClass(),
//         ]);
//         if (!requiredRoles) {
//             return true;
//         }
//         const { user } = context.switchToHttp().getRequest();
//         return requiredRoles.some((role) => user.roles?.includes(role));
//     }
// }