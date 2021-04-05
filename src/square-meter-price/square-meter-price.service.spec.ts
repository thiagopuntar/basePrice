import { Test, TestingModule } from '@nestjs/testing';
import { SquareMeterPriceService } from './square-meter-price.service';

describe('SquareMeterPriceService', () => {
  let service: SquareMeterPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquareMeterPriceService],
    }).compile();

    service = module.get<SquareMeterPriceService>(SquareMeterPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
