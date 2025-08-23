import { useEffect, useState } from "react";
import api from "../api/axios";
import type ProductType from "../objects/productType";

const entityRoute = "/tipos-de-produtos";

export function getProductTypeAll() {
	const [productTypes, setProductTypes] = useState<ProductType[] | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<ProductType[]>(entityRoute, {
					signal: controller.signal,
				});
				setProductTypes(res.data);
			} catch {
				setProductTypes(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, []);

	return productTypes;
}

export function getProductTypeById(id?: string) {
	const [productType, setProductType] = useState<ProductType | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchService = async () => {
			try {
				const res = await api.get<ProductType>(`${entityRoute}/${id}`, {
					signal: controller.signal,
				});
				setProductType(res.data);
			} catch {
				setProductType(null);
			}
		};

		fetchService();

		return () => controller.abort();
	}, [id]);

	return productType;
}

export function getProductTypeByStoreId(id?: string) {
	const [productTypes, setProductTypes] = useState<ProductType[] | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<ProductType[]>(`${entityRoute}/loja/${id}`, {
					signal: controller.signal,
				});
				setProductTypes(res.data);
			} catch {
				setProductTypes(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, [id]);

	return productTypes;
}
