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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Auth_Helper_1 = require("../auth/Auth.Helper");
const typeorm_2 = require("typeorm");
const user_dto_Response_1 = require("./dto/user-dto-Response");
const entities_1 = require("./entities");
let UsersService = class UsersService {
    async findUserById(id) {
        return this.userRepository.findOneBy({ id });
    }
    async getFilteredRepsonseUser(id) {
        let user = await this.findUserById(id);
        let userResponse = new user_dto_Response_1.UserDtoResponse();
        userResponse.username = user.username;
        userResponse.email = user.email;
        userResponse.id = user.id;
        return userResponse;
    }
    async getUsers() {
        let users;
        users = await this.userRepository.find();
        let userResponse = [];
        for (var i = 0; i < users.length; i++) {
            let user = users[i];
            let filterUser;
            filterUser = this.FilterReponse(user);
            userResponse.push(filterUser);
        }
        return userResponse;
    }
    DeleteuserById(id) {
        return this.userRepository.delete({ id });
    }
    DeleteAccount(body, req) {
        const user = req.user;
        let isPasswordRight = this.helper.isPasswordValid(body.oldpassword, user.password);
        if (!isPasswordRight) {
            throw new common_1.HttpException("wrong password", common_1.HttpStatus.BAD_REQUEST);
        }
        let userid = user.id;
        if (isNaN(userid)) {
            throw new common_1.HttpException("invalid link", common_1.HttpStatus.BAD_GATEWAY);
        }
        return this.delete(+userid);
    }
    delete(id) {
        return this.userRepository.delete({ id });
    }
    FilterReponse(user) {
        let userResponse = new user_dto_Response_1.UserDtoResponse();
        userResponse.email = user.email;
        userResponse.id = user.id;
        userResponse.username = user.username;
        return userResponse;
    }
    async UpdatePassword(body, req) {
        const user = req.user;
        let isOldPasswordRight = this.helper.isPasswordValid(body.oldpassword, user.password);
        if (!isOldPasswordRight) {
            throw new common_1.HttpException("the password is not correct", common_1.HttpStatus.CONFLICT);
        }
        user.password = this.helper.encodePassword(body.password);
        return this.userRepository.save(user);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(entities_1.User),
    __metadata("design:type", typeorm_2.Repository)
], UsersService.prototype, "userRepository", void 0);
__decorate([
    (0, common_1.Inject)(Auth_Helper_1.AuthHelper),
    __metadata("design:type", Auth_Helper_1.AuthHelper)
], UsersService.prototype, "helper", void 0);
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map