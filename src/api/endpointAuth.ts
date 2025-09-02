import type { AxiosError } from "axios";
import { setNewToken } from "../cookies/tokenCookie";
import type LoginModelDTO from "../models/DTOs/loginModelDTO";
import type ShopkeeperCreateDTO from "../models/DTOs/shopkeeperCreateDTO";
import type tokenDTO from "../models/DTOs/tokenDTO";
import type TokenModelDTO from "../models/DTOs/tokenModelDTO";
import api from "./axios";

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

export async function login(loginDTO: LoginModelDTO) {
	const jsonData = {
		userEmail: loginDTO.userEmail,
		password: loginDTO.password,
	};

	try {
		const response = await api.post<tokenDTO>(
			`${entityRoute}/login`,
			jsonData,
			{
				headers: {
					accept: "*/*",
					"Content-Type": "application/json",
				},
			},
		);

		const newToken: tokenDTO = {
			accessToken: response.data.accessToken,
			refreshToken: response.data.refreshToken,
			expiration: response.data.expiration,
		};
		const accessToken = newToken.accessToken;
		const refreshToken = newToken.refreshToken;
		const expiricy = newToken.expiration;
		setNewToken(newToken);

		return {
			success: true,
			accessToken: accessToken,
			refreshToken: refreshToken,
			expiration: expiricy,
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

export async function refresh(refreshToken: TokenModelDTO) {
	const jsonData = {
		accessToken: refreshToken.accessToken,
		refreshToken: refreshToken.refreshToken,
	};

	try {
		const response = await api.post<tokenDTO>(
			`${entityRoute}/refresh-token`,
			jsonData,
			{
				headers: {
					accept: "*/*",
					"Content-Type": "application/json",
				},
			},
		);

		const newToken = response.data;
		const newAccessToken = newToken.accessToken;
		const newRefreshToken = newToken.refreshToken;
		const newExpiricy = newToken.expiration;
		setNewToken(newToken);

		return {
			success: true,
			accessToken: newAccessToken,
			refreshToken: newRefreshToken,
			expiration: newExpiricy,
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
