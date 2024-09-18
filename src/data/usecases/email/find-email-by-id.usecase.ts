import { Inject } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';

export class FindEmailByIdUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  execute(id: string) {
    return this.emailRepository.findOne(id);
  }
}
