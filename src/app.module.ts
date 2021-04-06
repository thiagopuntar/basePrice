import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SquareMeterPriceModule } from './square-meter-price/square-meter-price.module';
@Module({
  imports: [
    SquareMeterPriceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
