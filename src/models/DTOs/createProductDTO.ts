export default interface CreateProductDTO {
	productTypeId: string;
	name: string;
	price: string;
	file?: File | null;
	stock: string;
	description: string;
}
