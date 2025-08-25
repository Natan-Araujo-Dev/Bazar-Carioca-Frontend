import { useEffect, useState } from "react";
import api from "../api/axios";
import type SearchResult from "../objects/searchResult";

const entityRoute = "/Busca";

interface SearchQueryParams {
	tiposDeEntidades?: string;
	termo: string;
}

export function useSearch(tiposDeEntidades?: string, termo?: string) {
	const [result, setResult] = useState<SearchResult | null>(null);

	useEffect(() => {
		if (!termo) {
			setResult(null);
			return;
		}

		const controller = new AbortController();

		const fetchSearch = async () => {
			try {
				const params: SearchQueryParams = {
					tiposDeEntidades: tiposDeEntidades,
					termo,
				};

				const res = await api.get<SearchResult>(entityRoute, {
					signal: controller.signal,
					params,
				});
				setResult(res.data);
			} catch {
				setResult(null);
			}
		};

		fetchSearch();

		return () => controller.abort();
	}, [termo, tiposDeEntidades]);

	return result;
}
