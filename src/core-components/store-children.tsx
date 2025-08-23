import Text from "../base-components/text";
import type ProductType from "../objects/productType";
import type Service from "../objects/service";
import ProductTypesList from "./product-type-list";
import ServicesList from "./services-list";

interface StoreChildrenProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	services?: Service[] | null;
	productTypes?: ProductType[] | null;
	isEditing: boolean;
}

export default function StoreChildren({
	services,
	productTypes,
	isEditing,
}: StoreChildrenProps) {
	if (!isEditing) {
	}

	return (
		<div className="flex flex-col gap-y-4">
			<div>
				<div className="flex flex-row">
					<Text variant="zilla-lg">Serviços</Text>

					{/* <ButtonIcon
						icon={ExpandIcon}
						variant="black"
						className="rounded-md"
					/> */}
				</div>

				<div className="rounded-b-lg bg-blue-extralight px-2 py-1">
					<ServicesList services={services}/>
				</div>
			</div>

			<div>
				<div className="flex flex-row">
					<Text variant="zilla-lg">Tipos de produtos</Text>

					{/* <ButtonIcon
						icon={ExpandIcon}
						variant="black"
						className="rounded-md"
					/> */}
				</div>

				<div className="rounded-b-lg bg-blue-extralight px-2 py-1">
					<ProductTypesList productTypes={productTypes} />
				</div>
			</div>
		</div>
	);
}
