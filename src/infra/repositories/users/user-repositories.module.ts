import { Module } from "@nestjs/common";
import { FindUserByEmailRepository } from "./find-user-by-email-and-password-repository.service";
import { CreateUserRepository } from "./create-user-repository.service";

@Module({
	providers: [FindUserByEmailRepository, CreateUserRepository],
	exports: [FindUserByEmailRepository, CreateUserRepository],
})
export class UserRepositoriesModule {}
