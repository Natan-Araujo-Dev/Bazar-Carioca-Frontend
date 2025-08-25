import Text from "../base-components/text";
import type Store from "../objects/store";

interface StoreInfoProps extends React.ComponentProps<"div"> {
	as?: keyof React.JSX.IntrinsicElements;
	store?: Store | null;
	isEditing: boolean;
}

export default function StoreInfo({ store, isEditing }: StoreInfoProps) {
	if (!store) return null;
	if (isEditing) {
		console.log("editando");
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
					className="object-contain self-stretch max-w-full max-h-full"
					src={store.imageUrl}
					alt={"teste"}
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
