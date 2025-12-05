import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @Transform(({ value }) => value?.toLowerCase().trim())
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @Transform(({ value }) => value?.trim())
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
