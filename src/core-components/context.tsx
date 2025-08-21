import { useNavigate } from "react-router-dom";
import ButtonIcon from "../base-components/button-icon";
import Text from "../base-components/text";
import returnArrowIcon from "../icons/returnArrowIcon.svg?react";

export default function Header() {
	const navigate = useNavigate();

	function handleBack() {
		navigate(-1);
	}

	return (
		<div
			className="
      w-1/1
		h-10
      flex
      justify-between
		items-center
      bg-blue-heavy"
			id="context"
		>
			<div className="h-full flex items-center">
				<ButtonIcon
					icon={returnArrowIcon}
					variant="white"
					size="sm"
					className="rounded-sm"
					onClick={handleBack}
				/>
			</div>

			<div>
				<Text variant="zilla-md" className="text-white">
					{/* automatizar isso */}
					Loja
				</Text>
			</div>

			<div></div>
		</div>
	);
}
