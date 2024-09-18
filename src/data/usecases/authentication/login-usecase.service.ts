import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import type { AuthenticationArgs } from "@domain/models/authentication/authentication-args";
import { FindUserByEmailRepository } from "@infra/repositories/users/find-user-by-email-and-password-repository.service";
import * as bcrypt from "bcrypt";
import type { FormattedUserData } from "@domain/models/users/formatted-user-by-id-data";

@Injectable()
export class LoginUsecase {
	@Inject(FindUserByEmailRepository)
	private findUserByEmailAndPasswordRepository: FindUserByEmailRepository;

	async execute({
		email,
		password,
	}: AuthenticationArgs): Promise<FormattedUserData> {
		const user = await this.findUserByEmailAndPasswordRepository.execute(email);
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			throw new UnauthorizedException("O usuário não foi encontrado.");
		}

		return {
			idUser: user.id,
			nome: user.name,
			tema: user.theme,
			email: user.email,
			cor: user.color,
		};
	}
}
