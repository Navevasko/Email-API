import { Module } from "@nestjs/common";
import { CreateUserUsecase } from "./create-user-usecase.service";
import { UserRepositoriesModule } from "@infra/repositories/users/user-repositories.module";
import { FindUserByIdUsecase } from "./find-user-by-id-usecase.service";
import { UpdateUserUsecase } from "./update-user-usecase.service";

@Module({
	providers: [CreateUserUsecase, FindUserByIdUsecase, UpdateUserUsecase],
	exports: [CreateUserUsecase, FindUserByIdUsecase, UpdateUserUsecase],
	imports: [UserRepositoriesModule],
})
export class UserUsecases {}
