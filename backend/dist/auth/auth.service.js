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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../users/entities");
const typeorm_2 = require("typeorm");
const Auth_Helper_1 = require("./Auth.Helper");
let AuthService = class AuthService {
    async register(body) {
        const { username, email, password, roles } = body;
        let user = await this.repository.findOne({ where: { email } });
        if (user) {
            throw new common_1.HttpException('Email Taken', common_1.HttpStatus.CONFLICT);
        }
        let isUsernameExist = await this.repository.findOne({ where: { username } });
        if (isUsernameExist) {
            throw new common_1.HttpException("username already exist", common_1.HttpStatus.CONFLICT);
        }
        user = new entities_1.User();
        user.username = username;
        user.email = email;
        user.password = this.helper.encodePassword(password);
        user.roles = roles;
        let newUser = await this.repository.save(user);
        let users = new entities_1.User();
        users.email = newUser.email;
        users.id = newUser.id;
        users.username = newUser.username;
        return users;
    }
    async login(body) {
        const { email, password } = body;
        const user = await this.repository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        const isPasswordValid = this.helper.isPasswordValid(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.HttpException('No user found', common_1.HttpStatus.NOT_FOUND);
        }
        let tokens = this.helper.generateToken(user);
        return { succes: true, token: tokens };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(entities_1.User),
    __metadata("design:type", typeorm_2.Repository)
], AuthService.prototype, "repository", void 0);
__decorate([
    (0, common_1.Inject)(Auth_Helper_1.AuthHelper),
    __metadata("design:type", Auth_Helper_1.AuthHelper)
], AuthService.prototype, "helper", void 0);
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map