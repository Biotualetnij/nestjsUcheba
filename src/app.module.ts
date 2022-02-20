import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpController } from './login-signup-system/sign-up/sign-up.controller';
import { LogInController } from './login-signup-system/log-in/log-in.controller';
import { LogInService } from './login-signup-system/log-in/log-in.service';
import { SignUpService } from './login-signup-system/sign-up/sign-up.service';

@Module({
  imports: [],
  controllers: [AppController, SignUpController, LogInController],
  providers: [AppService, LogInService, SignUpService],
})
export class AppModule {}
