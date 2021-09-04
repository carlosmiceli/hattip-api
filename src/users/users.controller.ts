import {
  Controller,
  // Get,
  Post,
  Req,
  Body,
  // Res,
  HttpCode,
  Header,
} from '@nestjs/common';
import { UserService } from './users.service';
import { userData } from './users-types';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post('auth')
  @Header('Access-Control-Allow-Credentials', 'true')
  @HttpCode(200)
  checkUser(@Req() request: any) {
    if (request.session.user) {
      console.log('Success!');
      return this.appService.checkUser();
    } else if (
      request.body.userSample.name === 'Carlos' &&
      request.body.userSample.password === 'carlos123'
    ) {
      request.session.user = request.body.userSample;
      return this.appService.checkUser();
    } else return 'Wrong!';
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
