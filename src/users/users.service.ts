import { Injectable } from '@nestjs/common';
import { userData } from './users-types';

@Injectable()
export class UserService {
  private user: userData;

  // create(user: userData) {
  //   this.user = user;
  // }

  checkUser(response: any) {
    console.log(response.req.session);
    return response.req.session;
  }

  loginUser(body: userData): boolean {
    const user = {
      u_id: 123,
      name: 'Carlos',
      password: 'carlos123',
    };
    if (body.name === user.name && body.password === user.password) {
      return true;
    } else return false;
  }

  signUpUser(body: userData): boolean {
    const newUser = {
      name: body.name,
      password: body.password,
    };
    console.log(newUser);
    return true;
  }
}
