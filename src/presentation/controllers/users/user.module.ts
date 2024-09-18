import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserUsecases } from "@data/usecases/users/user-usecases.module";
import { JwtModule } from "@nestjs/jwt";
import constants from "@main/config/constants";

@Module({
	controllers: [UserController],
	imports: [
		JwtModule.register({
			global: true,
			verifyOptions: { ignoreExpiration: false },
			secret: constants().JWT_SECRET,
			signOptions: { expiresIn: "7d" },
		}),
		UserUsecases,
	],
})
export class UserModule {}
