import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

type Loja = Record<string, unknown>;

export default function PageLoja() {
	const { id } = useParams<{ id: string }>();
	const [loja, setLoja] = useState<Loja | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();
		setLoading(true);
		setError(null);

		api
			.get<Loja>(`/lojas/${id}`, { signal: controller.signal })
			.then((res) => setLoja(res.data))
			.catch((err) => {
				if (err.name === "CanceledError" || err.message === "canceled") return;
				setError(
					err?.response?.data?.message ?? err.message ?? "Erro ao carregar",
				);
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, [id]);

	if (loading) return <div className="p-4 text-gray-500">Carregando...</div>;
	if (error) return <div className="p-4 text-red-500">Erro: {error}</div>;
	if (!loja)
		return <div className="p-4 text-gray-600">Nenhuma loja encontrada.</div>;

	return (
		<div>
			<pre className="bg-gray-50 border rounded p-4 text-sm overflow-x-auto">
				{JSON.stringify(loja, null, 2)}
			</pre>
		</div>
	);
}
