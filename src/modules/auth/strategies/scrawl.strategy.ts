import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import * as bcrypt from 'bcrypt';
import { scrawlConfig } from 'src/configs/configs.constants';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  constructor() {
    super({ header: 'Api-key', prefix: '' }, true, async (apiKey, done) => {
      return this.validate(apiKey, done);
    });
  }

  public validate = (apiKey: string, done: (error: Error, data) => {}) => {
    if (bcrypt.compare(scrawlConfig.scrawlKey, apiKey)) {
      done(null, true);
    }
    done(new UnauthorizedException(), null);
  };
}
