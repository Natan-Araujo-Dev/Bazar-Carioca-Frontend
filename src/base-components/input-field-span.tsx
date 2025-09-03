interface InputFieldSpanProps {
	className?: string;
	placeHolder: string;
	value?: string;
	onChange?: (v: string) => void;
	maxLength?: number;
}

export default function InputFieldSpan({
	className,
	placeHolder,
	value = "",
	onChange,
	maxLength,
}: InputFieldSpanProps) {
	return (
		<textarea
			value={value}
			onChange={(e) => onChange?.(e.target.value)}
			placeholder={placeHolder}
			maxLength={maxLength}
			className={`
			px-[4px] py-[0.2px]
			border-2 border-blue-heavy rounded-sm resize-none overflow-hidden
			${className}`}
		/>
	);
}
