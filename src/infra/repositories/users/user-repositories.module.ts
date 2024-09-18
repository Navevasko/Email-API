import { Module } from '@nestjs/common';
import { FindUserByEmailRepository } from './find-user-by-email-and-password-repository.service';
import { CreateUserRepository } from './create-user-repository.service';
import { FindUserByIdRepository } from './find-user-by-id-repository.service';
import { UpdateUserRepository } from './update-user-repository.service';

@Module({
  providers: [FindUserByEmailRepository, FindUserByIdRepository, CreateUserRepository, UpdateUserRepository],
  exports: [FindUserByEmailRepository, FindUserByIdRepository, CreateUserRepository, UpdateUserRepository]
})
export class UserRepositoriesModule {}
