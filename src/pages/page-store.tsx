import { useParams } from "react-router-dom";
import StoreChildren from "../core-components/store-children";
import StoreInfo from "../core-components/store-info";
import { getServicesByStoreId } from "../hooks/useService";
import { getStores } from "../hooks/useStore";
import { getProductTypeByStoreId } from "../hooks/useProductType";

export default function PageStore() {
	const { id } = useParams<{ id: string }>();
	const store = getStores(id);
	const services = getServicesByStoreId(id);
	const productTypes = getProductTypeByStoreId(id);

	if (!store) {
		return <div className="p-4 text-gray-600">Nenhuma loja encontrada.</div>;
	}

	if (!services) {
		console.log("nenhum serviço");
	}

	return (
		<div className="flex flex-col gap-y-4">
			<StoreInfo store={store} isEditing={false} />

			<StoreChildren services={services} productTypes={productTypes} isEditing={false} />
		</div>
	);
}
