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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orders_entity_1 = require("./entities/orders.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    getallOrder() {
        return this.orderRepository.find();
    }
    getOrders(createorderDto) {
        return this.orderRepository.save(createorderDto);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(orders_entity_1.Orders),
    __metadata("design:type", typeorm_2.Repository)
], OrdersService.prototype, "orderRepository", void 0);
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map