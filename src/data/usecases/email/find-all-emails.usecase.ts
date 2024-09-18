import { EmailRepository } from 'src/infra/repositories/email.repository';

  export class FindAllEmailsUseCase {
    constructor(private readonly emailRepository: EmailRepository) {}
  
    findAll() {
      return this.emailRepository.findAll();
    }
  }
  