import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetail } from 'src/interface/user/detail.interface';
import User from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async validateUser(details: UserDetail) {
        const user = await this.userRepository.findOneBy({ username: details.username })
        if (user) return user

        if (!details.password) details.password = 'test'
        
        this.userRepository.create(details)

        return await this.userRepository.save(details)
    }

    async findUser(id: number) {
        const user = await this.userRepository.findOneBy({ id })
        return user;
    }
}