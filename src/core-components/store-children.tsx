import { NavLink } from "react-router-dom";
import Icon from "../base-components/icon";
import Text from "../base-components/text";
import AddIcon from "../icons/addIcon.svg?react";
import type ProductType from "../models/productType";
import type Service from "../models/service";
import ProductTypesList from "./product-type-list";
import ServicesList from "./services-list";

interface StoreChildrenProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	storeId: string;
	services?: Service[] | null;
	productTypes?: ProductType[] | null;
	isEditing: boolean;
}

export default function StoreChildren({
	storeId,
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

					{
						//é o dono? então:
						<NavLink to={`/lojas/${storeId}/criar/servico`}>
							<Icon svg={AddIcon} className="fill-blue-vivid" />
						</NavLink>
					}
				</div>

				<div className="rounded-b-lg bg-blue-extralight px-2 py-1">
					<ServicesList services={services} />
				</div>
			</div>

			<div>
				<div className="flex flex-row">
					<Text variant="zilla-lg">Produtos</Text>

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
