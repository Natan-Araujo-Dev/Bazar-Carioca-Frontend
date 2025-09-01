import { useEffect, useState } from "react";
import api from "../api/axios";
import type Store from "../models/store";

export function getStores(id?: string) {
	const [store, setStore] = useState<Store | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchStore = async () => {
			try {
				const res = await api.get<Store>(`/lojas/${id}`, {
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
