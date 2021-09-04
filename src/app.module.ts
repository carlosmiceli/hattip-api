import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { NodlinksService } from './nodlinks/nodlinks.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [UserService, NodlinksService],
})
export class AppModule {}
