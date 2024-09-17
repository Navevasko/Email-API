import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationUsecasesModule } from "@data/usecases/authentication/authentication-usecases.module";
import { JwtModule } from "@nestjs/jwt";
import constants from "@main/config/constants";

@Module({
	controllers: [AuthenticationController],
	imports: [
		AuthenticationUsecasesModule,
		JwtModule.register({
			global: true,
			verifyOptions: { ignoreExpiration: false },
			secret: constants().JWT_SECRET,
			signOptions: { expiresIn: "7d" },
		}),
	],
})
export class AuthenticationModule {}
