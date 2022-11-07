import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { HeaderApiKeyStrategy } from './strategies/scrawl.strategy';

@Module({
  imports: [UsersModule, JwtModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService, JwtStrategy, HeaderApiKeyStrategy],
  exports: [AuthService],
})
export class AuthModule {}
