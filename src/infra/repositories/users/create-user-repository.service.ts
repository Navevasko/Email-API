import { PrismaService } from "@main/config/prisma/prisma.service";
import { Inject, Injectable } from "@nestjs/common";
import type { Prisma, User } from "@prisma/client";

@Injectable()
export class CreateUserRepository {
	@Inject(PrismaService)
	private prisma: PrismaService;

	async execute(data: Prisma.UserCreateInput): Promise<{ id: string }> {
		return await this.prisma.user.create({
			data,
			select: {
				id: true,
			},
		});
	}
}
