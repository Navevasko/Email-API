import type { HttpResponse } from "@domain/models/base/http";
import { PRISMA_EXCEPTION_CODES } from "@domain/models/enums/prisma-exception-codes";
import { notFound, serverError } from "@main/utils/api-response";
import { type ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter extends BaseExceptionFilter {
	catch(
		exception: Prisma.PrismaClientKnownRequestError,
		host: ArgumentsHost,
	): HttpResponse {
		const ctx = host.switchToHttp();
		const res = ctx.getResponse();
		const message = exception.message.replace(/\n/g, "");

		switch (exception.code) {
			case PRISMA_EXCEPTION_CODES.NOT_FOUND:
				return res.status(404).json(
					notFound({
						message,
					}),
				);

			case PRISMA_EXCEPTION_CODES.UNIQUE_EXISTS: {
				const target = exception.meta.target as string;
				const model = exception.meta.modelName as string;
				return res.status(400).json(
					notFound({
						message: `O ${target.match(/^[^_]+_(.+)_[^_]+$/)[1]} enviado da tabela ${model} já existe.`,
					}),
				);
			}

			default:
				return res.status(500).json(serverError());
		}
	}
}
