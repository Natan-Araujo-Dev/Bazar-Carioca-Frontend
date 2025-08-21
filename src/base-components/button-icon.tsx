import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const buttonIconVariants = cva(
	`
   inline-flex
   justify-center items-center
   cursor-pointer transition group
	box-content
   `,
	{
		variants: {
			variant: {
				gray: "bg-gray-medium hover:bg-gray-dark",
				red: "hover:bg-red-vivid",
				green: "hover:bg-green-vivid",
				blue: "hover:bg-blue-vivid",
				white: "hover:bg-cyan-900",
			},
			size: {
				squareBlank: "aspect-square",
				sm: "w-6 h-6",
				md: "w-10 h-10",
				none: "",
				max: "",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "gray",
			size: "squareBlank",
			disabled: false,
		},
	},
);

export const ButtonIconIconVariants = cva(`transition p-0.5`, {
	variants: {
		variant: {
			gray: "fill-black",
			red: "fill-red-vivid hover:fill-black",
			green: "fill-green-vivid hover:fill-black",
			blue: "fill-blue-vivid hover:fill-black",
			white: "fill-white",
		},
		size: {
			squareBlank: "aspect-square w-full h-full",
			sm: "w-6 h-6",
			md: "w-10 h-10",
			none: "",
			max: "w-full h-full",
		},
	},
	defaultVariants: {
		variant: "gray",
		size: "squareBlank",
	},
});

interface ButtonIconProps
	extends VariantProps<typeof buttonIconVariants>,
		Omit<React.ComponentProps<"button">, "size" | "disabled"> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
	variant,
	size,
	disabled,
	className,
	icon,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({
				variant,
				size,
				disabled,
				className,
			})}
			{...props}
		>
			<Icon svg={icon} className={ButtonIconIconVariants({ variant, size })} />
		</button>
	);
}
