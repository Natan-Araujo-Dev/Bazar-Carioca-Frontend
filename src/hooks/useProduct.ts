import { useEffect, useState } from "react";
import api from "../api/axios";
import type Product from "../objects/product";

const entityRoute = "/produtos";

export function getProductAll() {
	const [product, setProduct] = useState<Product[] | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<Product[]>(entityRoute, {
					signal: controller.signal,
				});
				setProduct(res.data);
			} catch {
				setProduct(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, []);

	return product;
}

export function getProductById(id?: string) {
	const [product, setProduct] = useState<Product | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchService = async () => {
			try {
				const res = await api.get<Product>(`${entityRoute}/${id}`, {
					signal: controller.signal,
				});
				setProduct(res.data);
			} catch {
				setProduct(null);
			}
		};

		fetchService();

		return () => controller.abort();
	}, [id]);

	return product;
}

export function getProductByProductTypeId(id?: string) {
	const [product, setProduct] = useState<Product[] | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<Product[]>(
					`${entityRoute}/tipo-de-produto/${id}`,
					{
						signal: controller.signal,
					},
				);
				setProduct(res.data);
			} catch {
				setProduct(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, [id]);

	return product;
}
