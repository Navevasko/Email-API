import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { FindAllEmailsUseCase } from 'src/data/usecases/email/find-all-emails.usecase';
import { FindEmailByIdUseCase } from 'src/data/usecases/email/find-email-by-id.usecase';
import { SendEmailUseCase } from 'src/data/usecases/email/send-email.usecase';
import { DeleteEmailUseCase } from 'src/data/usecases/email/delete-email.usecase';

@Module({
  controllers: [EmailController],
  providers: [FindAllEmailsUseCase, FindEmailByIdUseCase, SendEmailUseCase, DeleteEmailUseCase]
})
export class ClientModule {}
