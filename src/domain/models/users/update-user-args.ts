import type { Prisma } from "@prisma/client";

export interface UpdateUserArgs {
	id: string;
	data: Prisma.UserUpdateInput;
}
