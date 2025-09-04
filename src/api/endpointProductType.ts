import type { AxiosError } from "axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type CreateProductTypeDTO from "../models/DTOs/createProductTypeDTO";
import api from "./axios";

const entityRoute = "/tipos-de-produtos";

export async function createProductType(productType: CreateProductTypeDTO) {
	const formData = new FormData();

	formData.append("StoreId", productType.storeId);
	formData.append("Name", productType.name);

	try {
		const response = await api.post<CreateProductTypeDTO>(
			entityRoute,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${getAccessTokenCookie()}`,
				},
			},
		);

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
