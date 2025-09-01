import type React from "react";

interface ButtonTextProps {
	value: string;
	onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void | Promise<void>;
}

export default function CreateAccountButton({
	value,
	onClick,
}: ButtonTextProps) {
	return (
		<input
			type="button"
			value={value}
			onClick={onClick}
			className="
        flex
        md:w-50
        not-md:w-28
        text-blue-extralight
        expand
        bg-blue-medium rounded-sm"
		/>
	);
}
