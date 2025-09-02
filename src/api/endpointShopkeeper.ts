import type { AxiosError } from "axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type ShopkeeperCreateDTO from "../models/DTOs/shopkeeperCreateDTO";
import type Shopkeeper from "../models/shopkeeper";
import api from "./axios";

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

export async function getShopkeeperByEmail(email: string) {
	const response = await api.get<Shopkeeper>(`${entityRoute}/email`, {
		params: { Email: email },
		headers: {
			Authorization: `Bearer ${getAccessTokenCookie()}`,
		},
	});

	return {
		success: true,
		data: response.data,
	};
}
