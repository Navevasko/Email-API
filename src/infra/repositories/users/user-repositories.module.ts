import { Module } from '@nestjs/common';
import { FindUserByEmailRepository } from './find-user-by-email-and-password-repository.service';
import { FindOneUserByEmailRepository } from './find-user-by-email-respository.service';

@Module({
  providers: [FindUserByEmailRepository, FindOneUserByEmailRepository],
  exports: [FindUserByEmailRepository, FindOneUserByEmailRepository]
})
export class UserRepositoriesModule {}
