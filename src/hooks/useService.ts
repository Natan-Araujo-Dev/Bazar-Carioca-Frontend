import { useEffect, useState } from "react";
import api from "../api/axios";
import type Service from "../objects/service";

export function getAll() {
	const [services, setServices] = useState<Service[] | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<Service[]>(`/servicos`, {
					signal: controller.signal,
				});
				setServices(res.data);
			} catch {
				setServices(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, []);

	return services;
}

export function getById(id?: string) {
	const [service, setService] = useState<Service | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchService = async () => {
			try {
				const res = await api.get<Service>(`/servicos/${id}`, {
					signal: controller.signal,
				});
				setService(res.data);
			} catch {
				setService(null);
			}
		};

		fetchService();

		return () => controller.abort();
	}, [id]);

	return service;
}

export function getByStoreId(id?: string) {
	const [services, setServices] = useState<Service[] | null>(null);

	useEffect(() => {
		if (!id) return;

		const controller = new AbortController();

		const fetchServices = async () => {
			try {
				const res = await api.get<Service[]>(`/Servicos/loja/${id}`, {
					signal: controller.signal,
				});
				setServices(res.data);
			} catch {
				setServices(null);
			}
		};

		fetchServices();

		return () => controller.abort();
	}, [id]);

	return services;
}
