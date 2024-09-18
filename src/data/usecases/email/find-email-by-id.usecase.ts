import { EmailRepository } from 'src/infra/repositories/email.repository';

  export class FindEmailByIdUseCase {
    constructor(private readonly emailRepository: EmailRepository) {}
  
    findById(id: number) {
      return this.emailRepository.findOne(id);
    }
  }
  