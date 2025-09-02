import { useEffect, useState } from "react";
import api from "../api/axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type Shopkeeper from "../models/shopkeeper";

const entityRoute = "/lojistas";

export function getShopkeeperById(id?: string) {
	const [shopkeeper, setShopkeeper] = useState<Shopkeeper | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchService = async () => {
			try {
				const response = await api.get<Shopkeeper>(`${entityRoute}/${id}`, {
					signal: controller.signal,
					headers: {
						Authorization: `Bearer ${getAccessTokenCookie()}`,
					},
				});

				setShopkeeper(response.data);
			} catch {
				setShopkeeper(null);
			}
		};

		fetchService();

		return () => controller.abort();
	}, [id]);

	return shopkeeper;
}
