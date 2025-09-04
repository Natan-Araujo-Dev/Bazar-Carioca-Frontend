import type { AxiosError } from "axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type CreateServiceDTO from "../models/DTOs/CreateServiceDTO";
import api from "./axios";

const entityRoute = "/servicos";

export async function createService(service: CreateServiceDTO) {
	const formData = new FormData();

	formData.append("StoreId", service.storeId);
	formData.append("Name", service.name);
	formData.append("AveragePrice", service.averagePrice);

	try {
		const response = await api.post<CreateServiceDTO>(entityRoute, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${getAccessTokenCookie()}`,
			},
		});

		return {
			success: true,
			data: response.data,
		};
	} catch (error: unknown) {
		const err = error as AxiosError<{ message?: string }>;

		return {
			success: false,
			status: err.response?.status,
			message: err.response?.data?.message || "Erro na requisição",
			raw: err.response?.data,
		};
	}
}
