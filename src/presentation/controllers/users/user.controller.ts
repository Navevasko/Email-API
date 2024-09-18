import { CreateUserUsecase } from "@data/usecases/users/create-user-usecase.service";
import type { HttpResponse } from "@domain/models/base/http";
import { success } from "@main/utils/api-response";
import { Body, Controller, Inject, Post } from "@nestjs/common";
import type { CreateUserDto } from "@presentation/dtos/user/create-user-dto";

@Controller("/users")
export class UserController {
	@Inject(CreateUserUsecase)
	private createUserUsecase: CreateUserUsecase;

	@Post()
	async create(@Body() data: CreateUserDto): Promise<HttpResponse> {
		await this.createUserUsecase.execute(data);

		return success({});
	}
}
