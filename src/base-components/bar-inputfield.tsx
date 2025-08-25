import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { useSearchContext } from "../contexts/SearchContext";
import SearchResultBox from "./search-result-box";

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

interface BarInputfieldProps
	extends VariantProps<typeof barInputfieldVariants> {
	as?: keyof React.JSX.IntrinsicElements;
	className?: string;
}

export default function BarInputfield({
	as = "div",
	variant,
	className,
	...props
}: BarInputfieldProps) {
	const { result, term, setTerm } = useSearchContext();

	return React.createElement(
		as,
		{
			className: barInputfieldVariants({ variant, className }),
			...props,
		},
		<>
			<input
				type="search"
				value={term}
				onBlur={() => setTerm("")}
				onChange={(e) => setTerm(e.target.value)}
				placeholder="Buscar..."
				className="h-full w-full px-2 bg-gray-light"
			/>

			<SearchResultBox searchResult={result} />
		</>,
	);
}
