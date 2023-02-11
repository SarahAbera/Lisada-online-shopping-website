"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = exports.User = void 0;
const clothe_entity_1 = require("../../clothes/entities/clothe.entity");
Object.defineProperty(exports, "Cloth", { enumerable: true, get: function () { return clothe_entity_1.Cloth; } });
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const entities = [user_entity_1.User, clothe_entity_1.Cloth];
exports.default = entities;
//# sourceMappingURL=index.js.map