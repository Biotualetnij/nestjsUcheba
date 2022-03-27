import { Body, Controller, Get, Post, Put, Res } from '@nestjs/common';
import { LogInService } from './log-in.service';
import { Response } from 'express';
import { userDTO } from './log-in.dto';

@Controller('log-in')
export class LogInController {
  //http://localhost:3000/log-in/users
  constructor(private logInService: LogInService) {}

  @Get()
  getUsers() {}

  @Post('checkUser')
  ckeckUser(@Body() body: userDTO, @Res() response: Response) {
    this.logInService.checkUserData(body).then(
      (resolve) => {
        console.log('cookte');
        response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        response.header('set-cookie', 'myfirstcookie=somecookievalue');
        response.setHeader(
          'Set-Cookie',
          'visited=true; Max-Age=3000; HttpOnly, Secure',
        );
        response.cookie('login', 'true', {
          httpOnly: true,
          maxAge: 1000000,
          sameSite: false,
        });
        response.send(resolve.toString());
        response.end();
      },
      (rejects) => {
        console.log('it is reject' + rejects);
        return;
      },
    );
  }

  @Put()
  modifyUser() {}
}
