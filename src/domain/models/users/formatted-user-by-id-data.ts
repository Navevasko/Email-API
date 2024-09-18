import type { Colors, Themes } from "@prisma/client";

export interface FormattedUserData {
	idUser: string;
	nome: string;
	email: string;
	cor: Colors;
	tema: Themes;
}
