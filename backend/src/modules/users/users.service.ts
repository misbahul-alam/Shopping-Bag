import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async LoggedInUser(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      new UnauthorizedException('User not found');
    }
    return user;
  }

  async AllUsers(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const users = await this.userRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalUsers = await this.userRepository.count();
    return {
      data: users,
      meta: {
        total: totalUsers,
        page,
        limit,
        total_page: Math.ceil(totalUsers / limit),
      },
    };
  }
}
