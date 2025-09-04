import type { AxiosError } from "axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type CreateProductDTO from "../models/DTOs/createProductDTO";
import api from "./axios";

const entityRoute = "/produtos";

export async function createProduct(product: CreateProductDTO) {
	const formData = new FormData();

	formData.append("ProductTypeId", product.productTypeId);
	formData.append("Name", product.name);
	formData.append("Price", product.price);
	formData.append("File", product.file ?? new File([], ""));
	formData.append("Stock", product.stock);
	formData.append("Description", product.description);

	console.log(product);

	try {
		const response = await api.post<CreateProductDTO>(entityRoute, formData, {
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
