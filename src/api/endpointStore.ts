import type { AxiosError } from "axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type CreateStoreDTO from "../models/DTOs/createStoreDTO";
import api from "./axios";

const entityRoute = "/lojas";

export async function createStore(store: CreateStoreDTO) {
	const formData = new FormData();
	formData.append("Name", store.name);

	formData.append("ShopkeeperId", store.shopkeeperId.toString());
	formData.append("Name", store.name);
	formData.append("Description", store.description ?? "");
	formData.append("File", store.file ?? new File([], ""));
	formData.append("CellphoneNumber", store.cellphoneNumber ?? "");
	formData.append("Neighborhood", store.neighborhood ?? "");
	formData.append("Street", store.street ?? "");
	formData.append("Number", store.number ?? "");
	formData.append("OpeningTimeHour", store.openingTimeHour ?? "");
	formData.append("OpeningTimeMinute", store.openingTimeMinute ?? "");
	formData.append("ClosingTimeHour", store.closingTimeHour ?? "");
	formData.append("ClosingTimeMinute", store.closingTimeMinute ?? "");

	try {
		const response = await api.post<CreateStoreDTO>(entityRoute, formData, {
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
