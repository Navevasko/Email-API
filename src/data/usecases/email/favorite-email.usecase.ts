import { Inject } from "@nestjs/common";
import { EmailRepository } from "src/infra/repositories/emails/email.repository";

export class FavoriteEmailUseCase {
	@Inject(EmailRepository)
	private emailRepository: EmailRepository;

	execute(emailId: string, isFavorited: boolean) {
		return this.emailRepository.favorite(emailId, isFavorited);
	}
}
