import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { NodlinksService } from './nodlinks/nodlinks.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, NodlinksService],
})
export class AppModule {}
