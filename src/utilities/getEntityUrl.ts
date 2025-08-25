export default function getEntityUrl(entityType: string, entityId: number) {
	const entityTypeUrl = entityToUrl(entityType);

	return `/${entityTypeUrl}/${entityId}`;
}

function entityToUrl(entityName: string) {
	let finalName = "";

	switch (entityName) {
		case "Loja":
			finalName = "lojas";
			break;

		case "Serviço":
			finalName = "lojas";
			break;

		case "Tipo de produto":
			finalName = "lojas";
			break;

		case "Produto":
			finalName = "produtos";
			break;
	}

	return finalName;
}
