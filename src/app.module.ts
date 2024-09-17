import { Module } from "@nestjs/common/decorators";
import { PrismaModule } from "./main/config/prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
