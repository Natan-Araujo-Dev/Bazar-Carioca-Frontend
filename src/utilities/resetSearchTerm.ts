import { useSearchContext } from "../contexts/SearchContext";

export default function resetSearchTerm() {
	const { setTerm } = useSearchContext();

	setTerm("");
}
