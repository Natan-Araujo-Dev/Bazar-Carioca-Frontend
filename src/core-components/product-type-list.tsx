import ProductTypeRow from "../base-components/product-type-row";
import Text from "../base-components/text";
import ProductsList from "../core-components/products-list";
import type productType from "../objects/productType";

interface productTypeProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	productTypes?: productType[] | null;
}

export default function ProductTypesList({ productTypes }: productTypeProps) {
	if (!productTypes)
		return (
			<div>
				<Text variant="inter-md">Nenhum produto encontrado</Text>
			</div>
		);

	return (
		<div>
			{productTypes?.map((pt) => (
				<div key={pt.id}>
					<ProductTypeRow name={pt.name} />
					<ProductsList
						products={Array.isArray(pt.products) ? pt.products : [pt.products]}
					/>
				</div>
			))}
		</div>
	);
}
