import ServiceRow from "../base-components/service-row";
import Text from "../base-components/text";
import type Service from "../objects/service";

interface ServicesListProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	services?: Service[] | null;
}

export default function ServicesList({ services }: ServicesListProps) {
	if (!services)
		return (
			<div>
				<Text variant="inter-md">Nenhum produto encontrado</Text>
			</div>
		);

	return (
		<div className="">
			{(services ?? []).map((s) => (
				<ServiceRow key={s.id} service={s} />
			))}
		</div>
	);
}
