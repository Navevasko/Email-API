import {
	Injectable,
	type OnModuleDestroy,
	type OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	onModuleInit() {
		try {
			this.$connect();
		} catch (error) {
			console.error("Ocorreu um erro ao tentar se conectar com o banco");
		}
	}

	onModuleDestroy() {
		this.$disconnect();
	}
}
