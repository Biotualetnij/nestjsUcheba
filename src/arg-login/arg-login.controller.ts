import { Body, Controller, Get, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { ArgLoginService } from './arg-login.service';
import { userDTO } from './arg-login.dto';

@Controller('arg-login')
export class ArgLoginController {
  //http://localhost:3000/arg-login/users
  constructor(private logInService: ArgLoginService) {}

  @Get()
  getUsers() {}

  @Post('checkUserArg')
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
