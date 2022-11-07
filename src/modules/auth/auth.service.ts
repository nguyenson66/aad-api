import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async login(loginDto: LoginDto) {
    const { password, username } = loginDto;
    const user = await this.usersService.findUserLogin(username);

    if (user && (await user.validatePassword(password))) {
      const tokens = await this.tokenService.createToken(user);
      return {
        profile: {
          ...user,
          password: undefined,
          salt: undefined, // để tạm :()
        },
        tokens,
      };
    }

    throw new HttpException(
      'Username or password wrong',
      HttpStatus.BAD_REQUEST,
    );
  }
}
