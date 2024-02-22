import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn() {
    // sign in user
  }

  async logout() {
    // clear user session
  }

  async getSession() {
    // get authenticated user
  }

}
