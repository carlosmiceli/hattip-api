import { Injectable } from '@nestjs/common';
import { userData } from './users-types';

@Injectable()
export class UserService {
  private user: userData;
  // getHello(): string {
  //   return 'Hello World!!!!!';
  // }

  create(user: userData) {
    this.user = user;
  }

  loginUser(): userData {
    return {
      u_id: 123,
      name: 'Carlos',
      password: 'carlos123',
    };
  }

  signUpUser(): userData {
    return {
      u_id: 123,
      name: 'Carlos',
      password: 'carlos123',
    };
  }
}
