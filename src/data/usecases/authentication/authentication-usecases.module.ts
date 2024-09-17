import { Module } from "@nestjs/common";
import { LoginUsecase } from "./login-usecase.service";
import { UserRepositoriesModule } from "@infra/repositories/users/user-repositories.module";
import { JwtService } from "@nestjs/jwt";

@Module({
	providers: [LoginUsecase],
	exports: [LoginUsecase],
	imports: [UserRepositoriesModule],
})
export class AuthenticationUsecasesModule {}
