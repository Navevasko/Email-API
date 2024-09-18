import {
	IsString,
	IsOptional,
	IsBoolean,
	IsInt,
	IsDateString,
	IsEnum,
} from "class-validator";
import { Type } from "class-transformer";

enum Priority {
	NORMAL = "NORMAL",
}

enum EmailType {
	FROM = "DE",
	TO = "TO",
	CC = "CC",
	BCC = "BCC",
}

export class SendEmailDto {
	@IsString()
	@IsOptional()
	id?: string;

	@IsString()
	emailRemente: string;

	@IsString()
	nomeRemetente: string;

	@IsString()
	assunto: string;

	@IsString()
	body: string;

	@IsDateString()
	@Type(() => Date)
	dataEnvio: Date;

	@IsEnum(Priority)
	prioridade: Priority;

	@IsString()
	idMessageResponse: string;

	@IsEnum(EmailType)
	type: EmailType;

	@IsDateString()
	@IsOptional()
	@Type(() => Date)
	dataRecebimento?: Date;

	@IsBoolean()
	statusLeitura: boolean;

	@IsString()
	boxFolder: string;

	@IsString()
	para: string;

	@IsString()
	cc: string;

	@IsString()
	bcc: string;

	@IsString()
	idFromUser: string;

	@IsString()
	idToUser: string;
}
