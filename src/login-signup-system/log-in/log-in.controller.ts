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
        response.send(resolve.toString());
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
