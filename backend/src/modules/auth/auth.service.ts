import { LoginDto } from './dto/login.dto';
import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/database/database.module';
import type { DrizzleDB } from 'src/database/types/drizzle';
import { RegisterDto } from './dto/register.dto';
import { eq } from 'drizzle-orm';
import { users } from 'src/database/schema/users.schema';
import * as bcrypt from 'bcrypt';
import { CustomJwtPayload } from 'src/common/interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDB,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    return {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        id: user.id,
      },
      access_token: token,
    };
  }

  async register(registerDto: RegisterDto) {
    const { first_name, last_name, email, password, confirm_password } =
      registerDto;

    const exiting = await this.db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (exiting)
      throw new ConflictException('User with this email already exists');

    const hashedPassword = await bcrypt.hash(password, 10);

    const [newUser] = await this.db
      .insert(users)
      .values({
        first_name,
        last_name,
        email,
        password: hashedPassword,
      })
      .returning();

    const payload: CustomJwtPayload = {
      sub: newUser.id.toString(),
      email: newUser.email,
    };
    const token = this.jwtService.sign(payload);

    return {
      message: 'User registered successfully',
      token,
      user: { ...newUser, password: undefined },
    };
  }
}
