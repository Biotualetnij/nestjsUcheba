import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpController } from './login-signup-system/sign-up/sign-up.controller';
import { LogInController } from './login-signup-system/log-in/log-in.controller';
import { LogInService } from './login-signup-system/log-in/log-in.service';
import { SignUpService } from './login-signup-system/sign-up/sign-up.service';
import { ArgLoginController } from './arg-login/arg-login.controller';
import { ArgLoginService } from './arg-login/arg-login.service';

@Module({
  imports: [],
  controllers: [AppController, SignUpController, LogInController, ArgLoginController],
  providers: [AppService, LogInService, SignUpService, ArgLoginService],
})
export class AppModule {}
