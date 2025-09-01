import Text from "./text";

interface FormularyHeaderProps {
	text: string;
}

export default function FormularyHeader({ text }: FormularyHeaderProps) {
	return (
		<div
			className="
               flex
               w-full
               h-20
               justify-center
               items-center
               p-1
               rounded-md
               bg-blue-medium"
		>
			<Text
				variant="zilla-md"
				className="flex text-center text-blue-extralight"
			>
				{text}
			</Text>
		</div>
	);
}
