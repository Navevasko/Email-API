import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaExceptionFilter } from "@presentation/exceptions/prisma-exception";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const httpAdapter = app.getHttpAdapter();

	//* Globals
	app.useGlobalFilters(new PrismaExceptionFilter(httpAdapter));
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
}
bootstrap();
