import { useParams } from "react-router-dom";
import ProductInfo from "../core-components/product-info";
import { getProductById } from "../hooks/useProduct";

export default function PageProduct() {
	const { id } = useParams<{ id: string }>();
	const product = getProductById(id);

	return <ProductInfo product={product} />;
}
