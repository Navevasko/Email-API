import type { HttpResponse } from "../../domain/models/base/http";

export interface SucessParams {
	message?: string;
	payload?: object;
	headers?: object;
}
export function success({
	message,
	payload,
	headers,
}: SucessParams): HttpResponse {
	return {
		statusCode: 200,
		body: {
			success: true,
			message: message ?? "Solicitação bem sucedida",
			payload,
			errors: [],
		},
		headers,
	};
}

export interface NotFoundParams {
	message?: string;
	headers?: object;
	errors?: object[];
}
export function notFound({
	message,
	errors,
	headers,
}: NotFoundParams): HttpResponse {
	return {
		statusCode: 404,
		body: {
			success: false,
			message: message ?? "Instância não encontrada",
			payload: {},
			errors: errors,
		},
		headers,
	};
}

export interface ServerErrorParams {
	message?: string;
	headers?: object;
	errors: object[];
}
export function badRequest({
	message,
	errors,
	headers,
}: ServerErrorParams): HttpResponse {
	return {
		statusCode: 400,
		body: {
			success: false,
			message: message ?? "Parâmetros inválidos",
			payload: {},
			errors: [],
		},
		headers,
	};
}

export function serverError(): HttpResponse {
	return {
		statusCode: 500,
		body: {
			success: false,
			message:
				"Desculpe, ocorreu um erro no servidor. Tente novamente mais tarde",
			payload: {},
			errors: [],
		},
	};
}
