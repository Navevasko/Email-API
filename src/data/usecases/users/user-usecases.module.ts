import { Module } from "@nestjs/common";
import { CreateUserUsecase } from "./create-user-usecase.service";
import { UserRepositoriesModule } from "@infra/repositories/users/user-repositories.module";
import { FindUserByIdUsecase } from "./find-user-by-id-usecase.service";

@Module({
	providers: [CreateUserUsecase, FindUserByIdUsecase],
	exports: [CreateUserUsecase, FindUserByIdUsecase],
	imports: [UserRepositoriesModule],
})
export class UserUsecases {}
