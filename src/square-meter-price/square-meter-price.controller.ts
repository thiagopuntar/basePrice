import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import { CreateSquareMeterPriceDto } from './dtos/create-square-meter-price.dto';
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

  @Post()
  async createSquareMeterPrice(
    @Body() createSquareMeter: CreateSquareMeterPriceDto,
  ) {
    const created = await this.service.createSquareMeterPrice(
      createSquareMeter,
    );
    return created;
  }
}
