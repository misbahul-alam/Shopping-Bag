import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { Match } from 'src/core/decorators/match.decorator';

export class RegisterDto {
  @IsNotEmpty({ message: 'First name is required' })
  @IsString({ message: 'First name must be a string' })
  first_name: string;
  @IsNotEmpty({ message: 'Last name is required' })
  @IsString({ message: 'Last name must be a string' })
  last_name: string;
  @Transform(({ value }) => value?.toLowerCase().trim())
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a string' })
  email: string;
  @Transform(({ value }) => value?.trim())
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @IsStrongPassword(
    {
      minLength: 8,
    },
    { message: 'Password is too weak' },
  )
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: 'Confirm password is required' })
  @Match('password', { message: 'Confirm password must match with password' })
  confirm_password: string;
}
