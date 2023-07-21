import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './util/google-strategy';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/model/user.entity';
import { SessionSerializer } from './util/serializer';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [GoogleStrategy, {
        provide: 'AUTH_SERVICE',
        useClass: AuthService
    },
    SessionSerializer
],
})
export class AuthModule { };