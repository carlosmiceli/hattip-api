import { Controller, Get, Post, Req, Body, Res } from '@nestjs/common';
import { UserService } from './users.service';
import { userData } from './users-types';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('auth')
  checkUser(@Req() request: any, @Res({ passthrough: true }) response: any) {
    // if (
    //   request.auth.username === 'Carlos' &&
    //   request.auth.password === 'carlos123'
    // ) {
    // console.log(1, request);
    // const cookie = {
    //   name: 'Carlos',
    //   httpOnly: true,
    //   signed: true,
    // };
    // response.setHeader('Set-Cookie', cookie);
    return this.appService.checkUser(response);
    // }
    // return 'Wrong auth';
  }

  // app.get('/authenticate', auth, (req, res) => {
  //   if (req.auth.user === 'admin') {
  //     res.send('admin');
  //   } else if (req.auth.user === 'user') {
  //     res.send('user');
  //   }
  // });

  @Post('login')
  loginUser(@Body() body?: userData): boolean {
    return this.appService.loginUser(body);
  }

  @Post('signup')
  signUpUser(@Body() body?: userData): boolean {
    return this.appService.signUpUser(body);
  }
}
