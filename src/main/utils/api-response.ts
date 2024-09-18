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
			errors: [],
		},
		headers,
	};
}
