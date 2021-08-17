import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { userData } from './users-types';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('login')
  loginUser(): userData {
    return this.appService.loginUser();
  }

  @Post('signup')
  signUpUser(): userData {
    return this.appService.signUpUser();
  }
}
