import { CoffeesModule } from './../coffees/coffees.module';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: '.env', 파일 경로 직접 설정
      // ignoreEnvFile: true, 배포시 환경변수 무시용
    }),
    DatabaseModule.resister({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
