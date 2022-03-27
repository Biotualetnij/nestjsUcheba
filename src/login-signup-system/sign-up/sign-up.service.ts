import { Injectable } from '@nestjs/common';
import { userDTO } from '../log-in/log-in.dto';
import { Response } from 'express';
@Injectable()
export class SignUpService {
  private fs = require('fs');

  public signUp(userData: userDTO, res: Response) {
    let answer;
    this.checkIfUserExit(userData).then(
      (response) => {
        answer = response;
        console.log(answer.data);
        res.send(answer.answer);
        this.writeFile(answer);
      },
      (error) => {
        answer = error;
        console.log(answer);
        res.send(answer.message);
      },
    );
  }
  private async checkIfUserExit(user: userDTO) {
    let userDataArr;
    return await new Promise((resolve, reject) => {
      this.fs.readFile('assets/users.json', 'utf8', (error, data) => {
        if (error) {
          console.log(error);
          reject({
            answer: false,
            message: 'database has fallen, cannot register user',
          });
        }

        userDataArr = JSON.parse(data);
        // Check if this user login already exist
        for (let i in userDataArr.userDataBase) {
          if (userDataArr.userDataBase[i].login === user.login) {
            reject({
              answer: false,
              message: 'User with this login already exist',
            });
          }
        }
        userDataArr.userDataBase.push(user);

        resolve({
          answer: true,
          message: 'You are registered',
          data: userDataArr,
        });
      });
    });
  }
  private writeFile(answer) {
    this.fs.writeFile(
      'assets/users.json',
      JSON.stringify(answer.data),
      'utf8',
      (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
      },
    );
  }
}
