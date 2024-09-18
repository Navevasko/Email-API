import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';

export class DeleteEmailUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  execute(id: number) {
    const res = this.emailRepository.remove(id);

    if (!res) throw new HttpException('Email not found.', HttpStatus.NOT_FOUND);

    return;
  }
}
