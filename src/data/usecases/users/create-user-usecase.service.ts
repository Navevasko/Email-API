import { CreateUserRepository } from "@infra/repositories/users/create-user-repository.service";
import { JwtService } from "@nestjs/jwt";
import { Inject, Injectable } from "@nestjs/common";
import type { Prisma, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import constants from "@main/config/constants";

@Injectable()
export class CreateUserUsecase {
	@Inject(CreateUserRepository)
	private createUserRepository: CreateUserRepository;

	async execute(data: Prisma.UserCreateInput): Promise<{ id: string }> {
		data.password = await bcrypt.hash(
			data.password,
			Number(constants().BCRYPT_SALT),
		);

		const new_user = await this.createUserRepository.execute(data);

		return new_user;
	}
}
