import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/typeormDataSource';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(config), PassportModule.register({ session: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
