import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailUseCaseModule } from '@data/usecases/email/email-usecases.module';

@Module({
  controllers: [EmailController],
  imports: [EmailUseCaseModule]
})
export class EmailModule {}
