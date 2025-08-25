import Text from "../base-components/text";
import type Service from "../objects/service";

interface ServiceRowProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	service: Service;
}

export default function ServiceRow({ service }: ServiceRowProps) {
	if (!service) return;

	return (
		<div className="children-row">
			<Text className="flex">{service.name}</Text>
			<Text className="flex">R$ {service.averagePrice}</Text>
		</div>
	);
}
