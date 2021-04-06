import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SquareMeterPriceController } from './square-meter-price.controller';
import { SquareMeterPriceEntity } from './square-meter-price.entity';
import { SquareMeterPriceRepository } from './square-meter-price.repository';
import { SquareMeterPriceService } from './square-meter-price.service';

@Module({
  controllers: [SquareMeterPriceController],
  providers: [SquareMeterPriceService],
  imports: [
    TypeOrmModule.forFeature([
      SquareMeterPriceEntity,
      SquareMeterPriceRepository,
    ]),
  ],
})
export class SquareMeterPriceModule {}
