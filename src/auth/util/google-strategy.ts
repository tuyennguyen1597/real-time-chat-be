import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile } from "passport";
import { Strategy } from "passport-google-oauth2";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super({
            clientID: '447885749855-120mqi2gtt6u3ntf8pfluj6t7qhqt0tt.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:5000/api/auth/google/redirect',
            scope: ['profile', 'email'] //what we will receive
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const email: string = profile.emails[0].value;
        const user = await this.authService.validateUser({email, username: email})
        return user ? user : null
    }
}