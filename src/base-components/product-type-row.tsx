import Text from "./text";

interface ProductTypeRowProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	name: string;
}

export default function ProductTypeRow({
	name: productTypeName,
}: ProductTypeRowProps) {
	return <Text className="font-bold text-[15px]">{productTypeName}</Text>;
}
