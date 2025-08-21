import { useEffect, useState } from "react";
import api from "../api/axios";
import type Store from "../objects/store";

export function useStore(id?: string) {
	const [store, setStore] = useState<Store | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		api
			.get<Store>(`/lojas/${id}`, { signal: controller.signal })
			.then((res) => setStore(res.data))
			.catch(() => setStore(null));

		return () => controller.abort();
	}, [id]);

	return store;
}
