import ButtonIcon from "../base-components/button-icon";
import Text from "../base-components/text";
import ExpandIcon from "../icons/expandIcon.svg?react";
import type Service from "../objects/service";
import type ProductType from "../objects/productType";

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
		console.log("Não estou editando.");
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
					{!services ? (
						<Text variant="inter-md">Nenhum serviço encontrado</Text>
					) : (
						<table className="custom-table">
							<thead>
								<tr>
									<th className="text-left py-2 px-2">Nome</th>
									<th className="text-left py-2 px-2">Preço médio</th>
								</tr>
							</thead>

							<tbody>
								{services?.map((service) => (
									<tr key={service.id}>
										<td className="py-2 px-2">{service.name}</td>
										<td className="py-2 px-2">R$ {service.averagePrice}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
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
					{!productTypes ? (
						<Text variant="inter-md">Nenhum produto encontrado</Text>
					) : (
						<table className="custom-table">
							<tbody>
								{productTypes?.map((productType) => (
									<tr key={productType.id}>
										<td className="py-2 px-2">{productType.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}
