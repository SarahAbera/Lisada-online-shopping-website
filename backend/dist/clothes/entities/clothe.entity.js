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
exports.Cloth = void 0;
const typeorm_1 = require("typeorm");
let Cloth = class Cloth {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'bigint',
        name: 'cloth_id',
    }),
    __metadata("design:type", Number)
], Cloth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cloth_type',
        nullable: false,
    }),
    __metadata("design:type", String)
], Cloth.prototype, "clothtype", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        nullable: false
    }),
    __metadata("design:type", String)
], Cloth.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'price',
        nullable: false
    }),
    __metadata("design:type", Number)
], Cloth.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'origin',
        nullable: true,
        default: ""
    }),
    __metadata("design:type", String)
], Cloth.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "profile_url",
        nullable: true,
    }),
    __metadata("design:type", String)
], Cloth.prototype, "profile_url", void 0);
Cloth = __decorate([
    (0, typeorm_1.Entity)()
], Cloth);
exports.Cloth = Cloth;
//# sourceMappingURL=clothe.entity.js.map