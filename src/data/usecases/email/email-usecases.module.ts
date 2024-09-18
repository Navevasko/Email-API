import { Module } from '@nestjs/common';

import { FindAllEmailsUseCase } from './find-all-emails.usecase';
import { FindEmailByIdUseCase } from './find-email-by-id.usecase';
import { DeleteEmailUseCase } from './delete-email.usecase';
import { EmailRepositoriesModule } from '@infra/repositories/emails/email-repositories.module';
import { SendEmailUseCase } from './send-email.usecase';
import { FavoriteEmailUseCase } from './favorite-email.usecase';
import { FindAllReceivedEmailsUseCase } from './find-all-received-email.usecase';
import { UserRepositoriesModule } from '@infra/repositories/users/user-repositories.module';

@Module({
  providers: [
    FindAllEmailsUseCase,
    FindEmailByIdUseCase,
    SendEmailUseCase,
    DeleteEmailUseCase,
    FavoriteEmailUseCase,
    FindAllReceivedEmailsUseCase
  ],
  exports: [
    FindAllEmailsUseCase,
    FindEmailByIdUseCase,
    SendEmailUseCase,
    DeleteEmailUseCase,
    FavoriteEmailUseCase,
    FindAllReceivedEmailsUseCase
  ],
  imports: [EmailRepositoriesModule, UserRepositoriesModule]
})
export class EmailUseCaseModule {}
