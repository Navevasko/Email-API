import { Module } from '@nestjs/common';
import { EmailRepository } from './email.repository';

@Module({
  providers: [EmailRepository],
  exports: [EmailRepository]
})
export class EmailRepositoriesModule {}
