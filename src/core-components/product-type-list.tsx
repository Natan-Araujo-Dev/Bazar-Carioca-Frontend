import ProductTypeRow from "../base-components/product-type-row";
import Text from "../base-components/text";
import ProductsList from "../core-components/products-list";
import type productType from "../models/productType";

interface productTypeProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	storeShopkeeperId: string;
	productTypes?: productType[] | null;
}

export default function ProductTypesList({
	storeShopkeeperId,
	productTypes,
}: productTypeProps) {
	if (!productTypes) {
		return (
			<div>
				<Text variant="inter-md">Nenhum produto encontrado</Text>
			</div>
		);
	}

	return (
		<div>
			{productTypes?.map((pt) => (
				<div key={pt.id}>
					<ProductTypeRow
						storeShopkeeperId={storeShopkeeperId}
						productTypeId={pt.id.toString()}
						productTypeName={pt.name}
					/>

					{pt.products.length === 0 && (
						<div className="">
							<Text>Esse tipo de produto não tem nenhum produto.</Text>
						</div>
					)}

					<ProductsList
						products={Array.isArray(pt.products) ? pt.products : [pt.products]}
					/>
				</div>
			))}
		</div>
	);
}
