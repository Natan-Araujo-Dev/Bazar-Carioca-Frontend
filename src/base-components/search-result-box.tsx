import type SearchResult from "../objects/searchResult";
import SearchResultRow from "./search-result-row";

interface SearchResultBoxProps {
	searchResult?: SearchResult | null;
}

export default function SearchResultBox({
	searchResult,
}: SearchResultBoxProps) {
	if (!searchResult) {
		return;
	}

	return (
		<div className="absolute z-50">
			<div
				className="flex flex-col
            w-100
            p-1
            bg-white
            border-2 border-black"
			>
				{(searchResult.stores ?? []).map((store, idx) => (
					<SearchResultRow
						key={store.name ?? idx}
						entityId={store.id}
						entityType={"Loja"}
						entityName={store.name ?? null}
					/>
				))}

				{(searchResult.services ?? []).map((service, idx) => (
					<SearchResultRow
						key={service.name ?? idx}
						entityId={service.storeId ?? 0}
						entityType={"Serviço"}
						entityName={service.name ?? null}
					/>
				))}

				{(searchResult.products ?? []).map((product, idx) => (
					<SearchResultRow
						key={product.name ?? idx}
						entityId={product.id}
						entityType={"Produto"}
						entityName={product.name ?? null}
					/>
				))}
			</div>
		</div>
	);
}
