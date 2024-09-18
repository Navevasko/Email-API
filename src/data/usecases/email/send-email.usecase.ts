import { Inject, Injectable } from '@nestjs/common';
import { EmailRepository } from 'src/infra/repositories/emails/email.repository';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';

@Injectable()
export class SendEmailUseCase {
  @Inject(EmailRepository)
  private emailRepository: EmailRepository;

  async execute(sendEmailDto: SendEmailDto) {
    const lastEmail = await this.emailRepository.findLast(sendEmailDto.idFromUser);
    let isSpam = false;

    if (lastEmail) {
      const currentDate = new Date();
      const emailSentDate = new Date(lastEmail.created_at);

      const fiveMinutesInMilliseconds = 5 * 60 * 1000;

      if (currentDate.getTime() - emailSentDate.getTime() < fiveMinutesInMilliseconds) isSpam = true;
    }

    return this.emailRepository.create({ ...sendEmailDto, spam: isSpam });
  }
}
