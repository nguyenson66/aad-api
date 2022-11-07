import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ETypeToken } from 'src/common/constants/common.constants';
import { jwtConfig } from 'src/configs/configs.constants';
import { IUsers } from '../users/interface/users.interface';
import { UsersService } from '../users/users.service';
import { IJwtAccessToken, IJwtRefreshToken } from './interface/jwt.interface';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(user: IUsers) {
    return {
      accessToken: await this.generateToken(user, ETypeToken.Access_Token),
      refreshToken: await this.generateToken(user, ETypeToken.Refresh_Token),
    };
  }

  async generateToken(user: IUsers, type: ETypeToken) {
    let option, token;

    if (type === ETypeToken.Access_Token) {
      option = {
        secret: jwtConfig.accessToken_secret,
        expiresIn: jwtConfig.accressToken_expiresIn,
      };
      const payload: IJwtAccessToken = {
        id: user.id,
        email: user.email,
      };
      token = this.jwtService.sign(payload, option);
    } else {
      option = {
        secret: jwtConfig.refreshToken_secret,
        expiresIn: jwtConfig.refreshToken_expiresIn,
      };
      const payload: IJwtRefreshToken = {
        id: user.id,
        email: user.email,
      };
      token = this.jwtService.sign(payload, option);
    }

    return token;
  }
}
