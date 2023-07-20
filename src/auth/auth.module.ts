import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './util/google-strategy';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [GoogleStrategy, AuthService],
})
export class AuthModule {};