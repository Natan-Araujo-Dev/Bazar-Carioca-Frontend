import Text from "./text";

interface InputFieldProps {
	info: string;
	placeHolder: string;
	value?: string;
	onChange?: (v: string) => void;
}

export default function InputField({
	info,
	placeHolder,
	value = "",
	onChange,
}: InputFieldProps) {
	return (
		<div className="flex flex-col w-full">
			<div>
				<Text>{info}</Text>
			</div>

			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => onChange?.(e.target.value)}
					placeholder={placeHolder}
					className="
               flex
               w-full
               px-[4px] py-[0.2px]
               border-2 border-blue-heavy rounded-sm"
				/>
			</div>
		</div>
	);
}
