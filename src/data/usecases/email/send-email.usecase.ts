import { Inject, Injectable } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';

@Injectable()
export class SendEmailUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  execute(sendEmailDto: SendEmailDto) {
    return this.emailRepository.create(sendEmailDto);
  }
}
