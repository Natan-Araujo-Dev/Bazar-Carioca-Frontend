import api from "../api/axios";
import type ShopkeeperCreateDTO from "../objects/DTOs/shopkeeperCreateDTO";

const entityRoute = "/autenticacao";

export async function createAspNetUser(shopkeeper: ShopkeeperCreateDTO) {
	const jsonData = {
		userName: shopkeeper.Name,
		email: shopkeeper.Email,
		password: shopkeeper.Password,
	};

	const response = await api.post<ShopkeeperCreateDTO>(
		`${entityRoute}/registrar`,
		jsonData,
		{
			headers: {
				"Content-Type": "application/json-patch+json",
			},
		},
	);

	return response.data;
}

export async function addUserToShopkeeper(shopkeeper: ShopkeeperCreateDTO) {
	const params = {
		email: shopkeeper.Email,
	};

	const response = await api.post<JSON>(
		`${entityRoute}/add-user-to-shopkeeper`,
		null,
		{ params },
	);

	return response.data;
}
