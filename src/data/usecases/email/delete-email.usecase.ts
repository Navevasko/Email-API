import { EmailRepository } from 'src/infra/repositories/email.repository';

  export class DeleteEmailUseCase {
    constructor(private readonly emailRepository: EmailRepository) {}
  
    delete(id: number) {
      return this.emailRepository.remove(id);
    }
  }
  