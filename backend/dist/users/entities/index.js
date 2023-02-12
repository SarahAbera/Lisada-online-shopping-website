"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = exports.Cloth = exports.User = void 0;
const clothe_entity_1 = require("../../clothes/entities/clothe.entity");
Object.defineProperty(exports, "Cloth", { enumerable: true, get: function () { return clothe_entity_1.Cloth; } });
const orders_entity_1 = require("../../orders/entities/orders.entity");
Object.defineProperty(exports, "Orders", { enumerable: true, get: function () { return orders_entity_1.Orders; } });
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const entities = [user_entity_1.User, clothe_entity_1.Cloth, orders_entity_1.Orders];
exports.default = entities;
//# sourceMappingURL=index.js.map