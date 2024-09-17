import { Inject, Injectable } from "@nestjs/common";
import type { User } from "@prisma/client";
import { PrismaService } from "@main/config/prisma/prisma.service";

@Injectable()
export class FindUserByEmailRepository {
	@Inject(PrismaService)
	private prisma: PrismaService;

	async execute(email: string): Promise<User> {
		return await this.prisma.user.findFirstOrThrow({
			where: {
				AND: {
					email,
					finished_at: null,
				},
			},
		});
	}
}
