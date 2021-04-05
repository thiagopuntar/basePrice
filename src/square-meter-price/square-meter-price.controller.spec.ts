import { Test, TestingModule } from '@nestjs/testing';
import { SquareMeterPriceController } from './square-meter-price.controller';

describe('SquareMeterPriceController', () => {
  let controller: SquareMeterPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquareMeterPriceController],
    }).compile();

    controller = module.get<SquareMeterPriceController>(SquareMeterPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
