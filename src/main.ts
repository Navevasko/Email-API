import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaExceptionFilter } from "@presentation/exceptions/prisma-exception";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
  const httpAdapter = app.getHttpAdapter();

	//* Filters
	app.useGlobalFilters(new PrismaExceptionFilter(httpAdapter));

	await app.listen(3000);
}
bootstrap();
