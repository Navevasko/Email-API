import { Body, Controller, Inject, Post } from "@nestjs/common";
import type { HttpResponse } from "../../../domain/models/base/http";
import { success } from "../../../main/utils/api-response";
import type { LoginDTO } from "@presentation/dtos/authentication/login-dto";
import { LoginUsecase } from "@data/usecases/authentication/login-usecase.service";

@Controller("/authentication")
export class AuthenticationController {

	@Inject(LoginUsecase)
	private loginUsecase: LoginUsecase

	@Post()
	async login(@Body() data: LoginDTO): Promise<any> {
		const payload = await this.loginUsecase.execute(data)

		return payload;
	}
}
