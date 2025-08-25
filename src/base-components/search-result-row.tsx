import { NavLink } from "react-router-dom";
import getEntityUrl from "../utilities/getEntityUrl";
import resetSearchTerm from "../utilities/resetSearchTerm";

interface SearchResultRowProps {
	entityId: number;
	entityType: string | null;
	entityName: string | null;
}

export default function SearchResultRow({
	entityId,
	entityType,
	entityName,
}: SearchResultRowProps) {
	let finalUrl = "";

	if (entityType) {
		finalUrl = getEntityUrl(entityType, entityId);
	}

	return (
		<NavLink to={finalUrl} onClick={resetSearchTerm}>
			{entityType}: {entityName}
		</NavLink>
	);
}
