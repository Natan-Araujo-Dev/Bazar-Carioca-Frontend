import { NavLink } from "react-router-dom";
import type product from "../objects/product";
import Text from "./text";

interface ProductTypeRowProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	product: product;
}

export default function ProductTypeRow({ product }: ProductTypeRowProps) {
	return (
		<NavLink
			to={`/produtos/${product.id}`}
			className="children-row
			click-row	
			"
		>
			<div className="flex">
				<Text>{product.name}</Text>
			</div>
			<div className="flex">
				<Text>R$ {product.price}</Text>
			</div>
		</NavLink>
	);
}
