import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ParamIdDto {
  @Type(() => Number)
  @IsInt({ message: 'ID must be an integer' })
  @Min(1)
  id: number;
}
