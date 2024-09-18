import { CreateUserRepository } from "@infra/repositories/users/create-user-repository.service";
import { JwtService } from "@nestjs/jwt";
import { Inject, Injectable } from "@nestjs/common";
import type { Prisma, User } from "@prisma/client";
import constants from "@main/config/constants";

@Injectable()
export class CreateUserUsecase {
	@Inject(CreateUserRepository)
	private createUserRepository: CreateUserRepository;

	@Inject(JwtService)
	private jwtService: JwtService;

	async execute(data: Prisma.UserCreateInput): Promise<void> {
		await this.createUserRepository.execute(data);
	}
}
