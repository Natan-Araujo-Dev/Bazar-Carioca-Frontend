import type { AxiosError } from "axios";
import api from "../api/axios";
import type ShopkeeperCreateDTO from "../objects/DTOs/shopkeeperCreateDTO";

const entityRoute = "/lojistas";

export async function createShopkeeper(shopkeeper: ShopkeeperCreateDTO) {
	const formData = new FormData();
	formData.append("Name", shopkeeper.Name);
	formData.append("Email", shopkeeper.Email);
	formData.append("Password", shopkeeper.Password);

	try {
		const response = await api.post<ShopkeeperCreateDTO>(
			entityRoute,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
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
