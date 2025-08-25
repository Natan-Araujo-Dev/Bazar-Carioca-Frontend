import Text from "../base-components/text";
import type Store from "../objects/store";

interface StoreInfoProps extends React.ComponentProps<"div"> {
	store: Store;
	isEditing: boolean;
}

export default function StoreInfo({ store, isEditing }: StoreInfoProps) {
	const windowWidth = window.innerWidth;

	if (windowWidth < 720) {
		return <MobileStoreInfo store={store} isEditing={isEditing} />;
	}

	return <DesktopStoreInfo store={store} isEditing={isEditing} />;
}

function DesktopStoreInfo({ store, isEditing }: StoreInfoProps) {
	if (isEditing) {
		
	}

	return (
		<div className="flex flex-row gap-x-4">
			<div
				className="
				flex h-70 w-70
				bg-blue-extralight
				justify-center items-center
				rounded-sm "
			>
				<img
					className="flex object-cover w-full h-full rounded-md"
					src={store.imageUrl}
					alt={store.name}
				/>
			</div>

			<div className="flex flex-col justify-between gap-y-2">
				<div className="flex flex-col">
					<div>
						<Text variant="inter-lg">{store.name}</Text>
					</div>

					<div>
						<Text className="text-blue-medium">
							Horário de funcionamento: de {store.openingTime?.slice(0, -3)} até{" "}
							{store.closingTime?.slice(0, -3)}
						</Text>
					</div>
				</div>

				<div className="flex flex-row h-full gap-x-4">
					<div className="flex w-50 items-end">
						<Text>{store.description}</Text>
					</div>

					<div className="flex flex-col justify-between">
						<div className="flex max-w-50">
							<Text className="text-[10px]">
								<Text className="text-[15px]">Endereço:</Text>
								<br />
								{store.street}, {store.number} - {store.neighborhood}, Rio de
								Janeiro - RJ
							</Text>
						</div>
						<div className="flex items-center">
							<Text className="text-[10px]">
								<Text className="text-[15px]">Celular:</Text> <br />
								21 {store.cellphoneNumber}
							</Text>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MobileStoreInfo({ store, isEditing }: StoreInfoProps) {
	if (isEditing) {
		
	}

	return (
		<div className="flex flex-col gap-y-4">
			<div className="flex flex-col gap-y-2">
				<Text variant="inter-lg">{store.name}</Text>

				<Text className="text-blue-medium">
					Horário de funcionamento: de {store.openingTime?.slice(0, -3)} até{" "}
					{store.closingTime?.slice(0, -3)}
				</Text>
			</div>

			<div className="flex flex-row gap-x-4 justify-between">
				<div
					className="
					flex w-40 h-40
					bg-blue-extralight
					justify-center items-center
					rounded-sm"
				>
					<img
						className="flex object-cover w-full h-full rounded-md"
						src={store.imageUrl}
						alt={store.name}
					/>
				</div>

				<div className="flex w-40 h-40 justify-start items-start">
					<Text>{store.description}</Text>
				</div>
			</div>

			<div className="flex flex-col justify-between gap-y-4">
				<div className="flex">
					<Text className="text-[10px]">
						<Text className="text-[15px]">Endereço:</Text>
						<br />
						{store.street}, {store.number} - {store.neighborhood}, Rio de
						Janeiro - RJ
					</Text>
				</div>
				<div className="flex items-center">
					<Text className="text-[10px]">
						<Text className="text-[15px]">Celular:</Text> <br />
						21 {store.cellphoneNumber}
					</Text>
				</div>
			</div>
		</div>
	);
}
