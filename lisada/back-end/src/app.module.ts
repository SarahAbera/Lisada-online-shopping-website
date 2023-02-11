import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities from './users/entities';

import { UsersModule } from './users/users.module';

import { ClothesModule } from './clothes/clothes.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';




@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({ dest: 'src/uploads' })
    ,
    UsersModule,
    ClothesModule,
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService,
  ],

})
export class AppModule { }
