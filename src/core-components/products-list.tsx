import type React from "react";
import ProductRow from "../base-components/product-row";
import Text from "../base-components/text";
import type Product from "../objects/product";

interface ProductRowProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	products?: Product[] | null;
}

export default function ProductsList({ products }: ProductRowProps) {
	if (!products)
		return (
			<div>
				<Text variant="inter-md">Nenhum produto encontrado</Text>
			</div>
		);

	return (
		<div>
			{(Array.isArray(products) ? products : [products]).map((p) => (
				<div key={p.id}>
					<ProductRow product={p} />
				</div>
			))}
		</div>
	);
}
