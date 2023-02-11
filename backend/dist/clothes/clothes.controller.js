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
exports.ClothesController = void 0;
const common_1 = require("@nestjs/common");
const clothes_service_1 = require("./clothes.service");
const create_clothe_dto_1 = require("./dto/create-clothe.dto");
const update_clothe_dto_1 = require("./dto/update-clothe.dto");
const roles_guard_1 = require("../RBAC/roles.guard");
const Auth_guard_1 = require("../auth/Auth.guard");
const role_enum_1 = require("../RBAC/role.enum");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let ClothesController = class ClothesController {
    constructor(clothesService) {
        this.clothesService = clothesService;
    }
    create(createClothDto) {
        return this.clothesService.create(createClothDto);
    }
    findAll() {
        return this.clothesService.findAll();
    }
    findOne(id) {
        return this.clothesService.findOne(+id);
    }
    update(id, updateClotheDto) {
        return this.clothesService.updateCloth(+id, updateClotheDto);
    }
    DeleteCloth(id) {
        return this.clothesService.DeleteCloth(+id);
    }
    async AddProfile(file) {
        return file.filename;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clothe_dto_1.CreateClothDto]),
    __metadata("design:returntype", void 0)
], ClothesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClothesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClothesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_clothe_dto_1.UpdateClothDto]),
    __metadata("design:returntype", void 0)
], ClothesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClothesController.prototype, "DeleteCloth", null);
__decorate([
    (0, common_1.UseGuards)((0, roles_guard_1.default)(role_enum_1.Role.Admin)),
    (0, common_1.UseGuards)(Auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/profile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: 'uploads',
            filename: (req, file, callback) => {
                const uniqueSufix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const fileOrgName = file.originalname;
                const fileName = `${fileOrgName.split(".", 1)}-${uniqueSufix}${ext}`;
                callback(null, fileName);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClothesController.prototype, "AddProfile", null);
ClothesController = __decorate([
    (0, common_1.Controller)('clothes'),
    __metadata("design:paramtypes", [clothes_service_1.ClothesService])
], ClothesController);
exports.ClothesController = ClothesController;
//# sourceMappingURL=clothes.controller.js.map