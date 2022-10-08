import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(10, {
    message: 'Title is too short',
  })
  message: string;
}
