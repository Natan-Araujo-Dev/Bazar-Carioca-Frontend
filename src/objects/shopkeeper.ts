import type Store from "./store";

export default interface Shopkeeper {
	id: number;
	Name: string;
	Email: string;
	Password?: string | null;
	Stores: Store[] | null;
}
