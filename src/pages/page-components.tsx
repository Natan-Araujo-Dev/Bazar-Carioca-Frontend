import Card from "../core-components/card";
import Text from "../base-components/text";
import ButtonIcon from "../base-components/button-icon";

import SearchIcon from "../icons/searchIcon.svg?react";

import lojaVazia from "../objects/lojaVazia.json";
import mundialACabamentos from "../objects/MundialAcabamentos.json";
import Icon from "../base-components/icon";

export default function PageComponents() {
	return (
		<div className="grid grid-flow-row gap-y-2">
			<div className="flex flex-col">
				<Text variant="zilla-lg">Lorem, ipsum.</Text>
				<Text variant="inter-lg">Lorem, ipsum.</Text>
				<Text variant="inter-md">Lorem ipsum dolor sit amet.</Text>
				<Text variant="inter-sm">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</Text>
			</div>

			<div className="grid grid-flow-col justify-start gap-2">
				<Icon svg={SearchIcon} className="fill-red-500" />
				<Icon svg={SearchIcon} className="fill-red-500" />
			</div>

			<div className="grid grid-flow-col justify-start gap-2">
				<ButtonIcon icon={SearchIcon} variant="gray" />
				<ButtonIcon
					icon={SearchIcon}
					variant="red"
					size="max"
					className="rounded-2xl w-20 h-12"
				/>
				<ButtonIcon icon={SearchIcon} size="sm" variant="green" />
				<ButtonIcon icon={SearchIcon} size="md" variant="blue" />
			</div>

			<div className="grid grid-flow-col justify-start gap-2">
				<Card
					image={mundialACabamentos.image}
					name={mundialACabamentos.name}
					description={mundialACabamentos.description}
					products={mundialACabamentos.products}
					services={mundialACabamentos.services}
					adress={mundialACabamentos.adress}
				/>

				<Card
					image={lojaVazia.image}
					name={lojaVazia.name}
					description={lojaVazia.description}
					products={lojaVazia.products}
					services={lojaVazia.services}
					adress={lojaVazia.adress}
				/>
			</div>
		</div>
	);
}
