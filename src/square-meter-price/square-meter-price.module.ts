import { Module } from '@nestjs/common';
import { SquareMeterPriceController } from './square-meter-price.controller';
import { SquareMeterPriceService } from './square-meter-price.service';

@Module({
  controllers: [SquareMeterPriceController],
  providers: [SquareMeterPriceService],
})
export class SquareMeterPriceModule {}
