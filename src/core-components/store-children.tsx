import ButtonIcon from "../base-components/button-icon";
import Text from "../base-components/text";
import ExpandIcon from "../icons/expandIcon.svg?react";
import type Service from "../objects/service";

interface StoreChildrenProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	services?: Service[] | null;
	isEditing: boolean;
}

export default function StoreChildren({
	services,
	isEditing,
}: StoreChildrenProps) {
	//sendo chamando duas vezes, sendo as duas primeiras = null, e as duas últimas retornam services

	//é chamado 2x
	if (!isEditing) {
		console.log("Não estou editando.");
	}

	return (
		<div>
			<div>
				<div className="flex flex-row">
					<Text variant="zilla-lg">Serviços</Text>

					<ButtonIcon
						icon={ExpandIcon}
						variant="black"
						className="rounded-md"
					/>
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
										<td className="py-2 px-2">{service.averagePrice}</td>
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
