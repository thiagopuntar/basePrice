import { Injectable } from '@nestjs/common';
import { CreateSquareMeterPriceDto } from './dtos/create-square-meter-price.dto';
import { GetSquareMeterPriceDto } from './dtos/GetSquareMeterPrice.dto';
import { SquareMeterPriceEntity } from './square-meter-price.entity';
import { SquareMeterPriceRepository } from './square-meter-price.repository';

@Injectable()
export class SquareMeterPriceService {
  constructor(private squareMeterRepository: SquareMeterPriceRepository) {}

  async getSquareMeterPrice(
    filter: GetSquareMeterPriceDto,
  ): Promise<SquareMeterPriceEntity> {
    const squarePriceConfig = await this.squareMeterRepository.findOne({});
    return squarePriceConfig;
  }

  async createSquareMeterPrice(
    data: CreateSquareMeterPriceDto,
  ): Promise<SquareMeterPriceEntity> {
    const created = await this.squareMeterRepository.insert(data);
    return created.raw;
  }
}
