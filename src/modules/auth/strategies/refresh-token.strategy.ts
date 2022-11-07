import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConfig } from 'src/configs/configs.constants';
import { IJwtRefreshToken } from '../interface/jwt.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'refresh-token') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.refreshToken_secret,
    });
  }

  async validate(payload: IJwtRefreshToken): Promise<IJwtRefreshToken> {
    return payload;
  }
}
