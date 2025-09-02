import { NavLink, useParams } from "react-router-dom";
import Icon from "../base-components/icon";
import Text from "../base-components/text";
import { useInfoContext } from "../contexts/infoContext";
import Card from "../core-components/card";
import { getStoresByShopkeeperId } from "../hooks/useStore";
import AddIcon from "../icons/addIcon.svg?react";
import type Store from "../models/store";

interface PageProductProps {
	stores: Store[] | null;
}

export default function PageProduct() {
	const { id } = useParams<{ id: string }>();
	const stores = getStoresByShopkeeperId(id);

	const { setInfo } = useInfoContext();
	setInfo("Inspecionando suas lojas");

	const windowsWidth = window.innerWidth;

	if (windowsWidth < 720) {
		return <MobilePageShopkeeperStores stores={stores} />;
	}
	return <DesktopPageShopkeeperStores stores={stores} />;
}

function DesktopPageShopkeeperStores({ stores }: PageProductProps) {
	return (
		<div className="flex flex-col w-full mx-20">
			<div className="flex flex-row w-full justify-between items-center">
				<div className="ml-5">
					<Text variant="zilla-lg">Suas lojas:</Text>
				</div>

				<div>
					<NavLink to="/lojas/criar" className="flex flex-col items-end expand">
						<Icon svg={AddIcon} className="fill-blue-vivid" />

						<Text variant="zilla-lg" className="text-blue-vivid mr-7">
							Adicionar loja
						</Text>
					</NavLink>
				</div>
			</div>

			<div className="flex flex-row w-full h-full justify-center items-center">
				{!stores ? (
					<Text variant="zilla-md">
						Nenhuma loja foi encontrada. Para adicionar uma loja, basta clicar
						em "Adicionar loja".
					</Text>
				) : (
					stores?.map((store) => <Card key={store.name} store={store} />)
				)}
			</div>
		</div>
	);
}

function MobilePageShopkeeperStores({ stores }: PageProductProps) {
	return (
		<div className="flex flex-col mx-20">
			<div className="flex flex-row justify-between items-center">
				<div>
					<Text variant="zilla-md">Suas lojas:</Text>
				</div>

				<NavLink to="/lojas/criar" className="flex flex-col items-end expand mb-6">
					<Icon svg={AddIcon} className="fill-blue-vivid" />

					<Text variant="zilla-md" className="text-blue-vivid mr-6">
						Adicionar loja
					</Text>
				</NavLink>
			</div>

			<div className="flex flex-col gap-4 justify-center items-center">
				{!stores ? (
					<Text variant="zilla-md">
						Nenhuma loja foi encontrada. Para adicionar uma loja, basta clicar
						em "Adicionar loja".
					</Text>
				) : (
					stores?.map((store) => <Card key={store.name} store={store} />)
				)}
			</div>
		</div>
	);
}
