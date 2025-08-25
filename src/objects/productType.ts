import type Product from "./product";

export default interface productType {
	id: number;
	storeId?: number;
	name: string;
	products: Product[];
}
