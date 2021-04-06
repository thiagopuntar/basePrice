import { EntityRepository, Repository } from 'typeorm';
import { SquareMeterPriceEntity } from './square-meter-price.entity';

@EntityRepository(SquareMeterPriceEntity)
export class SquareMeterPriceRepository extends Repository<SquareMeterPriceEntity> {}
