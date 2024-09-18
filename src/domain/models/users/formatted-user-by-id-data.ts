import type { Colors, Themes } from "@prisma/client";

export interface FormattedUserData {
	idUser: number;
	nome: string;
	email: string;
	cor: Colors;
	tema: Themes;
}
