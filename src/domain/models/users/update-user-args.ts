import type { Prisma } from "@prisma/client";

export interface UpdateUserArgs {
	id: number;
	data: Prisma.UserUpdateInput;
}
