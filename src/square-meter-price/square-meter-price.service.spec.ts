import { Test, TestingModule } from '@nestjs/testing';
import { CreateSquareMeterPriceDto } from './dtos/create-square-meter-price.dto';
import { GetSquareMeterPriceDto } from './dtos/GetSquareMeterPrice.dto';
import { SquareMeterPriceRepository } from './square-meter-price.repository';
import { SquareMeterPriceService } from './square-meter-price.service';

describe('SquareMeterPriceService', () => {
  let service: SquareMeterPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquareMeterPriceService, SquareMeterPriceRepository],
      imports: [SquareMeterPriceRepository],
    }).compile();

    service = module.get<SquareMeterPriceService>(SquareMeterPriceService);
  });

  describe('createSquareMeterPrice', () => {
    it('should return price id', async () => {
      SquareMeterPriceRepository.prototype.insert = jest
        .fn()
        .mockResolvedValue({ raw: { id: 1 } });

      const data: CreateSquareMeterPriceDto = { value: 1 };
      const result = await service.createSquareMeterPrice(data);
      expect(result).toHaveProperty('id');
    });
  });

  describe('getSquareMeterPrice', () => {
    it('should return SquareMeterPrice', async () => {
      SquareMeterPriceRepository.prototype.findOne = jest
        .fn()
        .mockResolvedValue({ value: 1 });

      const filter: GetSquareMeterPriceDto = { zipCode: '' };
      const result = await service.getSquareMeterPrice(filter);
      expect(result).toHaveProperty('value', 1);
    });
  });
});
