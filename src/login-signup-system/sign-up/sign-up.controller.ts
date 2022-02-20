import { Body, Controller, Post, Res } from '@nestjs/common';
import { userDTO } from '../log-in/log-in.dto';
import { Response } from 'express';
import { SignUpService } from './sign-up.service';
@Controller('sign-up')
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @Post('registerUser')
  regUser(@Body() body: userDTO, @Res() response: Response) {
    console.log(body);
    this.signUpService.signUp(body, response);
  }
}
