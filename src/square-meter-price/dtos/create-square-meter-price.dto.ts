import { ApiProperty } from '@nestjs/swagger';

export class CreateSquareMeterPriceDto {
  @ApiProperty({ type: Number, description: 'Float number' })
  value: number;
}
