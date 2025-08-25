import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const barInputfieldVariants = cva("flex-1 h-full", {
	variants: {
		variant: {
			desktop: "",
			mobile: "",
		},
	},
	defaultVariants: {
		variant: "desktop",
	},
});

interface BarInputfieldProps extends VariantProps<typeof barInputfieldVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
}

export default function BarInputfield({ as = "div", variant, className, ...props }: BarInputfieldProps) {
	return React.createElement(as, {
			className: barInputfieldVariants({variant, className}),
			...props,
		},
		<input
				type="search"
				placeholder="Buscar..."
				className="h-full w-full px-2 bg-gray-light"
			/>
	);
}

/*
<div className="flex-1 h-full">
			<input
				type="search"
				placeholder="Buscar..."
				className="h-full w-full px-2 bg-gray-light"
			/>
		</div>
		*/