import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { NavLink } from "react-router";
import imageNotFound from "../assets/Image-not-found.png";
import Text from "../base-components/text";
import type Store from "../objects/store";

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
	store?: Store | null;
}

export default function Card({ store }: CardProps) {
	if (!store) return null;

	const windowWidth = window.innerWidth;

	if (windowWidth < 720) {
		return <MobileCard store={store} />;
	}

	return <DesktopCard store={store} />;
}

function DesktopCard({ store }: CardProps) {
	if (!store) return null;

	return (
		<NavLink
			to={`/lojas/${store.id}`}
			className="
			w-100 h-60
			rounded-xl
			bg-blue-extralight
			flex flex-row
			shadow-sm
			"
		>
			<div className="flex w-1/2 p-4 justify-center">
				{store?.imageUrl ? (
					<img
						className="object-contain self-center max-w-1/1 max-h-1/1 rounded-md"
						src={store?.imageUrl}
						alt={store?.name}
					/>
				) : (
					<img
						className="object-contain self-center max-w-1/1 max-h-1/1 rounded-md"
						src={imageNotFound}
						alt={store?.name}
					/>
				)}
			</div>

			{/* Textos na direita */}
			<div className="w-1/2 p-4 flex flex-col justify-between">
				<Text variant="inter-lg">{store?.name}</Text>
				<Text variant="inter-md">{store?.description}</Text>
				<Text variant="inter-sm">{`${store?.street}, ${store?.number} - ${store?.neighborhood}`}</Text>
			</div>
		</NavLink>
	);
}

function MobileCard({ store }: CardProps) {
	if (!store) return null;

	return (
		<NavLink
			to={`/lojas/${store.id}`}
			className="
			flex flex-col
			w-80 h-120
			rounded-xl
			bg-blue-extralight
			shadow-sm
			justify-between
			p-4
			"
		>
			<div className="flex justify-center m-4">
				<Text variant="inter-lg">{store?.name}</Text>
			</div>

			<div className="flex p-4 justify-center">
				{store?.imageUrl ? (
					<img
						className="object-contain self-center max-w-1/1 max-h-1/1 rounded-md"
						src={store?.imageUrl}
						alt={store?.name}
					/>
				) : (
					<img
						className="object-contain self-center max-w-1/1 max-h-1/1 rounded-md"
						src={imageNotFound}
						alt={store?.name}
					/>
				)}
			</div>

			<div>
				<Text variant="inter-md">{store?.description}</Text>
			</div>

			<div>
				<Text variant="inter-sm">{`${store?.street}, ${store?.number} - ${store?.neighborhood}`}</Text>
			</div>
		</NavLink>
	);
}
