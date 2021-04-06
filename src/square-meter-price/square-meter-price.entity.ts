import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SquareMeterPriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;
}
