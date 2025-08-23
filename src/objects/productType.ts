import type Product from "./product";

export default interface productType {
	id: number;
	storeId?: number | null;
	name: string;
	products: Product;
}
