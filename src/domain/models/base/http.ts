export interface HttpResponseBody {
	success: boolean;
	message: string;
	payload?: object;
	errors: object[];
}

export interface HttpResponse {
	statusCode: number;
	body: HttpResponseBody;
	headers?: object;
}
