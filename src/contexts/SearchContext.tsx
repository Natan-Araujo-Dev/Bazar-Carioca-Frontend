import type React from "react";
import { createContext, useContext, useState } from "react";
import { useSearch } from "../hooks/getSearch";
import type SearchResult from "../objects/searchResult";

interface SearchContextType {
	term: string;
	setTerm: (term: string) => void;
	type: string;
	setType: (type: string) => void;
	result: SearchResult | null;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [term, setTerm] = useState("");
	const [type, setType] = useState("todos");
	const result = useSearch(type, term);

	return (
		<SearchContext.Provider value={{ term, setTerm, type, setType, result }}>
			{children}
		</SearchContext.Provider>
	);
}

export function useSearchContext() {
	const ctx = useContext(SearchContext);
	if (!ctx)
		throw new Error("useSearchContext must be used within SearchProvider");
	return ctx;
}
