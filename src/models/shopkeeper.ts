import type Store from "./store";

export default interface Shopkeeper {
	id: number;
	name: string;
	email: string;
	password?: string | null;
	stores: Store[] | null;
}
