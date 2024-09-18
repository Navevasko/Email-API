import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@main/config/prisma/prisma.module';
import constants from '@main/config/constants';
import { AuthenticationModule } from '@presentation/controllers/authentication/authentication.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [constants] }), PrismaModule, AuthenticationModule]
})
export class AppModule {}
