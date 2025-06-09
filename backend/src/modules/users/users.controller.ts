import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async LoggedUser(@Req() req) {
    return this.usersService.LoggedInUser(req.user.id as string);
  }

  @Get('all')
  async AllUsers(@Query() paginationDto: PaginationDto) {
    return this.usersService.AllUsers(paginationDto);
  }
}
