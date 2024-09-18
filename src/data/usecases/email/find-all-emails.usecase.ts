import { Inject } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';

export class FindAllEmailsUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  execute(userId: number) {
    return this.emailRepository.findAll(userId);
  }
}
