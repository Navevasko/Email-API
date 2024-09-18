import { Inject, Injectable } from "@nestjs/common";
import { FindUserByIdRepository } from "@infra/repositories/users/find-user-by-id-repository.service";
import type { FormattedUserData } from "@domain/models/users/formatted-user-by-id-data";

@Injectable()
export class FindUserByIdUsecase {
	@Inject(FindUserByIdRepository)
	private findUserByIdRepository: FindUserByIdRepository;

	async execute(id: number): Promise<FormattedUserData> {
		const user = await this.findUserByIdRepository.execute(id);

		const formatted_user = {
			idUser: user.id,
			nome: user.name,
			email: user.email,
			cor: user.color,
			tema: user.theme,
		};

		return formatted_user;
	}
}
