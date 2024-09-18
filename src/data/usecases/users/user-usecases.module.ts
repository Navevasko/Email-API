import { Module } from "@nestjs/common";
import { CreateUserUsecase } from "./create-user-usecase.service";
import { UserRepositoriesModule } from "@infra/repositories/users/user-repositories.module";

@Module({
	providers: [CreateUserUsecase],
	exports: [CreateUserUsecase],
	imports: [UserRepositoriesModule],
})
export class UserUsecases {}
