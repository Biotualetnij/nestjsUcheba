import { Body, Controller, Post, Res } from '@nestjs/common';
import { userDTO } from '../arg-login/arg-login.dto';
import { Response } from 'express';
import { SignUpService } from './arg-signup.service';
@Controller('arg-signup')
export class ArgSignUpController {
  constructor(private signUpService: Arg-SignUpService) {}

  @Post('registerUser')
  regUser(@Body() body: userDTO, @Res() response: Response) {
    console.log(body);
    this.signUpService.signUp(body, response);
  }
}