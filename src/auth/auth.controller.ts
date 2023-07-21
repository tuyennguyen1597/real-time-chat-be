import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'src/guards/google-oauth.guard';
import { Request } from 'express'

@Controller('auth')
export class AuthController {
    constructor() { }

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return { msg: 'Google Authentication' }
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {
        return { msg: 'OK' }
    }

    @Get('status')
    user(@Req() request: Request) {
        if (request.user) {
            return { msg: 'Authenticated' }
        }
        return { msg: 'Unauthenticated...' }
    }
}