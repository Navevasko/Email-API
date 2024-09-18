import { EmailRepository } from 'src/infra/repositories/email.repository';
import { SendEmailDto } from 'src/presentation/dtos/email/send-email.dto';
  
  export class SendEmailUseCase {
    constructor(private readonly emailRepository: EmailRepository) {}
  
    send(sendEmailDto: SendEmailDto) {
      return this.emailRepository.create(sendEmailDto);
    }
  }
  