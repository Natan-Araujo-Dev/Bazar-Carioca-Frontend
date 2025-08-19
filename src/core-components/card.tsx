import React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import Text from "../base-components/text";

export const cardVariants = cva(``, {
	variants: {
		variant: {
			primary: "",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

interface CardProps
	extends VariantProps<typeof cardVariants>,
		React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	image?: string;
	name: string;
	description: string;
	products: string;
	services: string;
	adress: string;
}

export default function Card({
	image,
	name,
	description,
	products,
	services,
	adress,
}: CardProps) {
	return (
		<div
			//alterar isso pra cva
			className="
			w-100 h-60
			rounded-xl
			bg-blue-extralight
			flex flex-row
			shadow-sm
			"
		>
			{/* Imagem na esquerda // editar */}
			<div className="flex w-1/2 p-4 justify-center">
				{image && (
					<img
						className="object-contain self-center max-w-1/1 max-h-1/1 rounded-md"
						src={image}
						alt={name}
					/>
				)}
			</div>

			{/* Textos na direita */}
			<div className="w-1/2 p-4 flex flex-col justify-between">
				<Text variant="inter-lg">{name}</Text>
				<Text variant="inter-md">{description}</Text>
				<Text variant="inter-md">{products}</Text>
				<Text variant="inter-md">{services}</Text>
				<Text variant="inter-sm">{adress}</Text>
			</div>
		</div>
	);
}
