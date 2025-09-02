import { useInfoContext } from "../contexts/infoContext";

export default function PageCreateStore() {
	const { setInfo } = useInfoContext();
	setInfo("Criando loja");

	return (
		<div className="flex justify-between items-center">
			Estou trabalhando nisso!
			<br />
			Fique de olho no meu github ou
			<br />
			venha visitar esse site para conferir.
		</div>
	);
}
