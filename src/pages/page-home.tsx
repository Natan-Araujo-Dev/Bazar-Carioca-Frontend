import Text from "../base-components/text";
import Card from "../core-components/card";
import { useStore } from "../hooks/useStore";

export default function PageHome() {
	const store1 = useStore("2");
	const store2 = useStore("3");
	const store3 = useStore("4");

	return (
		<div
			className="
			grid
			justify-center
			items-center
		 	space-y-25"
		>
			<div>
				<Text variant="zilla-lg">Conheça alguma de nossas lojas:</Text>
			</div>

			<div className="flex flex-wrap gap-4">
				<Card store={store1} />

				<Card store={store2} />

				<Card store={store3} />
			</div>
		</div>
	);
}
