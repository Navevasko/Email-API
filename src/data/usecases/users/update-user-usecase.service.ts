import type { FormattedUserData } from "@domain/models/users/formatted-user-by-id-data";
import type { UpdateUserArgs } from "@domain/models/users/update-user-args";
import { UpdateUserRepository } from "@infra/repositories/users/update-user-repository.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class UpdateUserUsecase {
	@Inject(UpdateUserRepository)
	private UpdateUserRepository: UpdateUserRepository;

	async execute({ id, data }: UpdateUserArgs): Promise<FormattedUserData> {
		const updated_user = await this.UpdateUserRepository.execute({ id, data });

		const formatted_user = {
			idUser: updated_user.id,
			nome: updated_user.name,
			email: updated_user.email,
			cor: updated_user.color,
			tema: updated_user.theme,
		};

		return formatted_user;
	}
}
