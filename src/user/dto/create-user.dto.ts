/* eslint-disable prettier/prettier */
import {
  IsString,
  IsEmail,
  IsStrongPassword,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
  })
  password: string;

  @IsOptional()
  @IsDateString()
  birthDate: string;
}
