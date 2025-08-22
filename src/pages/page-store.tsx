import { useParams } from "react-router-dom";
import StoreChildren from "../core-components/store-children";
import StoreInfo from "../core-components/store-info";
import { getByStoreId } from "../hooks/useService";
import { useStore } from "../hooks/useStore";

export default function PageStore() {
	const { id } = useParams<{ id: string }>();
	const store = useStore(id);
	const services = getByStoreId(id);

	if (!store) {
		return <div className="p-4 text-gray-600">Nenhuma loja encontrada.</div>;
	}

	if (!services) {
		console.log("nenhum serviço");
	}

	return (
		<div className="flex flex-col gap-y-4">
			<StoreInfo store={store} isEditing={false} />

			<StoreChildren services={services} isEditing={false} />
		</div>
	);
}
