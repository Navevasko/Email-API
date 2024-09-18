import { CreateUserUsecase } from "@data/usecases/users/create-user-usecase.service";
import { FindUserByIdUsecase } from "@data/usecases/users/find-user-by-id-usecase.service";
import type { HttpResponse } from "@domain/models/base/http";
import { success } from "@main/utils/api-response";
import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from "@nestjs/common";
import type { CreateUserDto } from "@presentation/dtos/user/create-user-dto";

@Controller("/users")
export class UserController {
	@Inject(FindUserByIdUsecase)
	private findUserByIdUsecase: FindUserByIdUsecase;
	
	@Get("/:id")
	async findById(@Param("id", ParseIntPipe) id: number) {
		const user = await this.findUserByIdUsecase.execute(id)
		return success({ payload: user})
	}
	
	@Inject(CreateUserUsecase)
	private createUserUsecase: CreateUserUsecase;

	@Post()
	async create(@Body() data: CreateUserDto): Promise<HttpResponse> {
		await this.createUserUsecase.execute(data);

		return success({});
	}
}
