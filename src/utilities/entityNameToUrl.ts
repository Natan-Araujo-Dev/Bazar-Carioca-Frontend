export default function entityUrl(entityName: string) {
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
