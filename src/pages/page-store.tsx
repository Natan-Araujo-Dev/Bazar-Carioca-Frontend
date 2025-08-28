import { useParams } from "react-router-dom";
import StoreChildren from "../core-components/store-children";
import StoreInfo from "../core-components/store-info";
import { getProductTypeByStoreId } from "../hooks/getProductType";
import { getServicesByStoreId } from "../hooks/getService";
import { getStores } from "../hooks/getStore";

export default function PageStore() {
	const { id } = useParams<{ id: string }>();
	const store = getStores(id);
	const services = getServicesByStoreId(id);
	const productTypes = getProductTypeByStoreId(id, true);

	if (!store) {
		return <div className="p-4 text-gray-600">Nenhuma loja encontrada.</div>;
	}

	return (
		<div className="flex flex-col gap-y-4">
			<StoreInfo store={store} isEditing={false} />

			<StoreChildren
				services={services}
				productTypes={productTypes}
				isEditing={false}
			/>
		</div>
	);
}
