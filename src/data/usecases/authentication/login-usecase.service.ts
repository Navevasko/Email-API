import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import type { AuthenticationArgs } from "@domain/models/authentication/authentication-args";
import { FindUserByEmailRepository } from "@infra/repositories/users/find-user-by-email-and-password-repository.service";
import * as bcrypt from "bcrypt";
import constants from "@main/config/constants";

@Injectable()
export class LoginUsecase {
	@Inject(FindUserByEmailRepository)
	private findUserByEmailAndPasswordRepository: FindUserByEmailRepository;

	@Inject(JwtService)
	private jwtService: JwtService;

	async execute({ email, password }: AuthenticationArgs): Promise<string> {
		const user = await this.findUserByEmailAndPasswordRepository.execute(email);
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			throw new UnauthorizedException("O usuário não foi encontrado.");
		}

		return this.jwtService.sign(user, { secret: constants().JWT_SECRET });
	}
}
