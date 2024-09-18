import type { UpdateUserArgs } from "@domain/models/users/update-user-args";
import { PrismaService } from "@main/config/prisma/prisma.service";
import { Inject, Injectable } from "@nestjs/common";
import type { User } from "@prisma/client";

@Injectable()
export class UpdateUserRepository {
	@Inject(PrismaService)
	private prisma: PrismaService;

	async execute({ id, data }: UpdateUserArgs): Promise<User> {
		return await this.prisma.user.update({
			where: {
				id,
			},
			data,
		});
	}
}
