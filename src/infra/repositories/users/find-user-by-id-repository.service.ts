import { Inject, Injectable } from "@nestjs/common";
import type { User } from "@prisma/client";
import { PrismaService } from "@main/config/prisma/prisma.service";

@Injectable()
export class FindUserByIdRepository {
	@Inject(PrismaService)
	private prisma: PrismaService;

	async execute(id: string): Promise<User> {
		return await this.prisma.user.findFirstOrThrow({
			where: {
				AND: {
					id,
					finished_at: null,
				},
			},
		});
	}
}
