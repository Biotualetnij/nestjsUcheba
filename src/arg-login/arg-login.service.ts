import { Injectable } from '@nestjs/common';
import { userDTO } from './arg-login.dto';

@Injectable()
export class ArgLoginService {
  private fs = require('fs');

  public checkUserData = async (user: userDTO) => {
    let userDataArr;

    return await new Promise((resolve, reject) => {
      this.fs.readFile('assets/users.json', 'utf8', (error, data) => {
        if (error) {
          console.log(error);
          reject(error);
        }

        userDataArr = JSON.parse(data);
        userDataArr.userDataBase.forEach((element) => {
          if (
            element.login === user.login &&
            element.password === user.password
          ) {
            resolve(true);
          }
        });
        resolve(false);
      });
    });
  };
}
