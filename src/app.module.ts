import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@main/config/prisma/prisma.module';
import constants from '@main/config/constants';
import { AuthenticationModule } from '@presentation/controllers/authentication/authentication.module';
import { EmailModule } from '@presentation/controllers/email/email.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [constants] }), PrismaModule, AuthenticationModule, EmailModule]
})
export class AppModule {}
