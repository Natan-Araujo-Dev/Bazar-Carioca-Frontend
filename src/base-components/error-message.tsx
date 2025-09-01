import ErrorIcon from "../icons/errorIcon.svg?react";
import Icon from "./icon";
import Text from "./text";

interface ErrorMessageProps {
	condition: boolean | (() => boolean);
	errorMessage: string;
}

export default function InputFieldResponse({
	condition,
	errorMessage,
}: ErrorMessageProps) {
	const show = typeof condition === "function" ? condition() : condition;
	if (!show) return null;

	return (
		<div className="flex flex-row gap-2">
			<Icon svg={ErrorIcon} className="fill-red-600" />
			<Text variant="zilla-md" className="text-red-600">
				{errorMessage}
			</Text>
		</div>
	);
}
