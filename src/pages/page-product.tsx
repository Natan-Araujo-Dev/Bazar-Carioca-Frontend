import { useParams } from "react-router-dom";
import ProductInfo from "../core-components/product-info";
import { getProductById } from "../hooks/useProduct";
import { useInfoContext } from "../contexts/infoContext";

export default function PageProduct() {
	const { id } = useParams<{ id: string }>();
	const product = getProductById(id);

		const { setInfo } = useInfoContext();
		setInfo("Inspecionando produto");

	return <ProductInfo product={product} />;
}
