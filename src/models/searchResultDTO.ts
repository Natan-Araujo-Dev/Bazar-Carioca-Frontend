import type Product from "./product";
import type ProductType from "./productType";
import type Service from "./service";
import type Store from "./store";

export default interface SearchResult {
	stores: Store[] | null;
	services: Service[] | null;
	productTypes: ProductType[] | null;
	products: Product[] | null;
}
