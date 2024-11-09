import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  exports: [UserService, UserRepository],
  providers: [UserService, UserRepository],
})
export class UserModule {}
