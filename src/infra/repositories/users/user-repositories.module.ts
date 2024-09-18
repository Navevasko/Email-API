import { Module } from "@nestjs/common";
import { FindUserByEmailRepository } from "./find-user-by-email-and-password-repository.service";

@Module({
	providers: [FindUserByEmailRepository],
	exports: [FindUserByEmailRepository],
})
export class UserRepositoriesModule {}
