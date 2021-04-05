import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { GetSquareMeterPriceDto } from './dtos/GetSquareMeterPrice.dto';
import { SquareMeterPriceService } from './square-meter-price.service';

@Controller('square-meter-price')
export class SquareMeterPriceController {
  constructor(private service: SquareMeterPriceService) {}

  @Get()
  async getSquareMeterPrice(@Query() filter: GetSquareMeterPriceDto) {
    const price = this.service.getSquareMeterPrice(filter);

    if (!price) {
      throw new NotFoundException(
        `No price found for the zipCode ${filter.zipCode}`,
      );
    }

    return price;
  }
}
