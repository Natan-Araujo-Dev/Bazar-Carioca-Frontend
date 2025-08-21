import ButtonIcon from "../base-components/button-icon";
import Icon from "../base-components/icon";
import Text from "../base-components/text";
import Card from "../core-components/card";
import { useStore } from "../hooks/useStore";
import SearchIcon from "../icons/searchIcon.svg?react";

export default function PageComponents() {
	const store1 = useStore("1");
	const store2 = useStore("2");

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
				<Card store={store1} />

				<Card store={store2} />
			</div>
		</div>
	);
}
