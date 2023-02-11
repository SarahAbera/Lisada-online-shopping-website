"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const entities_1 = require("./users/entities");
const users_module_1 = require("./users/users.module");
const clothes_module_1 = require("./clothes/clothes.module");
const auth_module_1 = require("./auth/auth.module");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: "postgres",
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: entities_1.default,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            platform_express_1.MulterModule.register({ dest: 'src/uploads' }),
            users_module_1.UsersModule,
            clothes_module_1.ClothesModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map