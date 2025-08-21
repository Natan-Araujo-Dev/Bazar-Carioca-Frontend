import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("", {
	variants: {
		variant: {
			"inter-sm": "text-[10px] leading-[10px] font-inter font-extralight",
			"inter-md": "text-xs leading-3 font-inter",
			"inter-lg": "text-xl leading-4 font-inter font-semibold",

			"inter-header-selectable": "text-[12px] font-bold",
			"inter-footer": "text-[12px] text-gray-extralight",
			"inter-hypertext": "text-[12px] text-blue-hypertext underline",

			"zilla-lg": "text-3xl font-zilla-slab",
			"zilla-md": "text-[18px] font-zilla-slab",
		},
	},
	defaultVariants: {
		variant: "inter-md",
	},
});

interface TextProps extends VariantProps<typeof textVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;

	children?: React.ReactNode;
}

export default function Text({
	as = "span",
	variant,
	className,
	children,
	...props
}: TextProps) {
	return React.createElement(
		as,
		{
			className: textVariants({ variant, className }),
			...props,
		},
		children,
	);
}
