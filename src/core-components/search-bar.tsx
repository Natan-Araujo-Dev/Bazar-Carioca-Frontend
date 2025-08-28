import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import BarInputfield from "../base-components/bar-inputfield";
import ButtonIcon from "../base-components/button-icon";
import SelectDropdown from "../base-components/select-dropdown";
import searchIcon from "../icons/searchIcon.svg?react";

export const searchBarVariants = cva(
	`
	flex
	h-8
	items-center justify-center
	mx-8
	`,
	{
		variants: {
			variant: {
				desktop: "w-full",
				mobile: "w-full",
			},
		},
		defaultVariants: {
			variant: "desktop",
		},
	},
);

interface SearchBarProps extends VariantProps<typeof searchBarVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
}

export default function SearchBar({
	as = "div",
	variant,
	className,
	...props
}: SearchBarProps) {


	return React.createElement(
		as,
		{
			className: searchBarVariants({ variant, className }),
			...props,
		},
		<>
			<SelectDropdown />

			<BarInputfield variant={variant} />

			{/*Tenho que fazer o button icon*/}
			<ButtonIcon
				//onClick={debugar}
				icon={searchIcon}
				variant="gray"
				size="none"
				className="h-full aspect-square rounded-r-md"
			/>
		</>,
	);
}
