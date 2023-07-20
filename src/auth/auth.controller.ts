import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'src/guards/google-oauth.guard';

@Controller('auth')
export class AuthController {
    constructor(){}

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return {msg: 'Google Authentication'}
    }

    @Get('google/redirect') 
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {

    }
}