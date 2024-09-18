import type { HttpResponse } from "@domain/models/base/http";
import { PRISMA_EXCEPTION_CODES } from "@domain/models/enums/prisma-exception-codes";
import { notFound } from "@main/utils/api-response";
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

			default:
				console.log(exception.code);
		}
	}
}
