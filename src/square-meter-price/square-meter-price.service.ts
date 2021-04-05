import { Injectable } from '@nestjs/common';
import { GetSquareMeterPriceDto } from './dtos/GetSquareMeterPrice.dto';
import { SquareMeterPrice } from './square-meter-price.model';

@Injectable()
export class SquareMeterPriceService {
  getSquareMeterPrice(filter: GetSquareMeterPriceDto): SquareMeterPrice {
    const price = new SquareMeterPrice();
    price.value = 50.43;
    return price;
  }
}
