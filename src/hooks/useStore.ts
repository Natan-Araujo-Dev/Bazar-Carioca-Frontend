import { useEffect, useState } from "react";
import api from "../api/axios";
import { getAccessTokenCookie } from "../cookies/userCookie";
import type Store from "../models/store";

const entityRoute = "/lojas";

export function getStoresByShopkeeperId(id?: string) {
	const [stores, setStores] = useState<Store[] | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchStores = async () => {
			try {
				const res = await api.get<Store[]>(`${entityRoute}/lojista/${id}`, {
					signal: controller.signal,
					headers: {
						Authorization: `Bearer ${getAccessTokenCookie()}`,
					},
				});
				setStores(res.data);
			} catch {
				setStores(null);
			}
		};

		fetchStores();

		return () => controller.abort();
	}, [id]);

	return stores;
}

export function getStores(id?: string) {
	const [store, setStore] = useState<Store | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchStore = async () => {
			try {
				const res = await api.get<Store>(`${entityRoute}/${id}`, {
					signal: controller.signal,
				});
				setStore(res.data);
			} catch {
				setStore(null);
			}
		};

		fetchStore();

		return () => controller.abort();
	}, [id]);

	return store;
}
