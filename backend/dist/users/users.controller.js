"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const Auth_guard_1 = require("../auth/Auth.guard");
const role_enum_1 = require("../RBAC/role.enum");
const roles_guard_1 = require("../RBAC/roles.guard");
let UsersController = class UsersController {
    findAll() {
        return this.usersService.getUsers();
    }
    findOne(id) {
        return this.usersService.getFilteredRepsonseUser(+id);
    }
    DeleteAccount(body, req) {
        return this.usersService.DeleteAccount(body, req);
    }
    UpdatePassword(body, req) {
        return this.usersService.UpdatePassword(body, req);
    }
    delete(id) {
        return this.usersService.DeleteuserById(+id);
    }
};
__decorate([
    (0, common_1.Inject)(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], UsersController.prototype, "usersService", void 0);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.User)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)("delete"),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.User)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.DeleteAccountDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "DeleteAccount", null);
__decorate([
    (0, common_1.Put)("password"),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdatePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "UpdatePassword", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    (0, common_1.Controller)('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map