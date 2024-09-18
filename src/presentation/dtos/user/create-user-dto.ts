import type { Colors, Themes } from "@prisma/client";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
	@IsString()
	email: string;

	@IsString()
	name: string;

	@IsString()
	password: string;

	@IsString()
	@IsOptional()
	color?: Colors;

	@IsString()
	@IsOptional()
	theme?: Themes;
}
