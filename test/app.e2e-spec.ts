import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SquareMeterPriceModule } from '../src/square-meter-price/square-meter-price.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SquareMeterPriceModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET square-meter-price', () => {
    return request(app.getHttpServer()).get('/square-meter-price').expect(200);
  });

  it('/POST square-meter-price', () => {
    return request(app.getHttpServer())
      .post('/square-meter-price')
      .send({ value: 1 })
      .expect(201);
  });
});
