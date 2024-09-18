import { Inject } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';

export class FindAllReceivedEmailsUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  execute(userId: string, isFavorited?: boolean) {
    return this.emailRepository.findAllReceived(userId, isFavorited);
  }
}
