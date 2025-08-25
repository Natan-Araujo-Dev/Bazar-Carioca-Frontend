import Text from "../base-components/text";
import Card from "../core-components/card";
import { getStores } from "../hooks/useStore";
import type Store from "../objects/store";

interface PageHomeProps extends React.ComponentProps<"div"> {
	store1?: Store | null;
	store2?: Store | null;
	store3?: Store | null;
}

export default function PageHome() {
	const store1 = getStores("2");
	const store2 = getStores("3");
	const store3 = getStores("4");

	const widowWidth = window.innerWidth;

	if (widowWidth < 720) {
		return <MobilePageHome store1={store1} store2={store2} store3={store3} />;
	}

	return <DesktopPageHome store1={store1} store2={store2} store3={store3} />;
}

function DesktopPageHome({ store1, store2, store3 }: PageHomeProps) {
	return (
		<div
			className="
			flex flex-col flex-wrap
			justify-center
			items-start
		 	space-y-25"
		>
			<div>
				<Text variant="zilla-lg">Conheça alguma de nossas lojas:</Text>
			</div>

			<div
				className="
				flex flex-wrap gap-4"
			>
				<Card store={store1} />

				<Card store={store2} />

				<Card store={store3} />
			</div>
		</div>
	);
}

function MobilePageHome({ store1, store2, store3 }: PageHomeProps) {
	return (
		<div
			className="
			flex flex-col flex-wrap
		 	space-y-25"
		>
			<div>
				<Text variant="zilla-lg">Conheça alguma de nossas lojas:</Text>
			</div>

			<div
				className="
				flex flex-col items-center gap-4"
			>
				<div>
					<Card store={store1} />
				</div>

				<div>
					<Card store={store2} />
				</div>

				<div>
					<Card store={store3} />
				</div>
			</div>
		</div>
	);
}
