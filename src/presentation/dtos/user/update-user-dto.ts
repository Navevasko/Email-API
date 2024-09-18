import { Colors, Themes } from "@prisma/client";
import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
	@IsString()
	@IsOptional()
	name?: string;

	@IsEmail()
	@IsOptional()
	email?: string;

	@IsString()
	@IsOptional()
	password?: string;

	@IsEnum(Colors)
	@IsOptional()
	color?: Colors;

	@IsEnum(Themes)
	@IsOptional()
	theme?: Themes;
}
