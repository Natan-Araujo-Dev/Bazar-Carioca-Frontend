import BarInputfield from "../base-components/bar-inputfield";
import ButtonIcon from "../base-components/button-icon";
import SelectDropdown from "../base-components/select-dropdown";

import searchIcon from "../icons/searchIcon.svg?react";

export default function SearchBar() {
	return (
		<div
			className="
         w-120
         h-8
			flex
			items-center justify-center"
		>
			<SelectDropdown />

			<BarInputfield />

			{/*Tenho que fazer o button icon*/}
			<ButtonIcon
				icon={searchIcon}
				variant="gray"
				size="none"
				className="h-full aspect-square rounded-r-md"
			/>
		</div>
	);
}
