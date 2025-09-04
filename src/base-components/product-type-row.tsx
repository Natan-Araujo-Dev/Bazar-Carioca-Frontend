import { NavLink } from "react-router-dom";
import { getUserIdCookie } from "../cookies/userCookie";
import AddIcon from "../icons/addIcon.svg?react";
import Icon from "./icon";
import Text from "./text";

interface ProductTypeRowProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	storeShopkeeperId: string;
	productTypeId: string;
	productTypeName: string;
}

export default function ProductTypeRow({
	storeShopkeeperId,
	productTypeId,
	productTypeName,
}: ProductTypeRowProps) {
	let isOwner = false;
	const userId = getUserIdCookie();

	if (userId !== null && userId !== undefined) {
		isOwner = storeShopkeeperId === userId.toString();
	}

	return (
		<div className="flex">
			<div>
				<Text className="font-bold text-[15px]">{productTypeName}</Text>
			</div>

			<div>
				{isOwner && (
					<NavLink to={`/tipo-de-produto/${productTypeId}/criar`}>
						<Icon svg={AddIcon} className="fill-blue-vivid" />
					</NavLink>
				)}
			</div>
		</div>
	);
}
