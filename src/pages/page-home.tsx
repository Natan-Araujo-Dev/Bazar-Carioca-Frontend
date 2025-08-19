import Card from "../core-components/card";
import Text from "../base-components/text";

import lojaVazia from "../objects/lojaVazia.json";
import mundialACabamentos from "../objects/MundialAcabamentos.json";
import suzanaModas from "../objects/suzanaModas.json";
import LojaDoSeuZe from "../objects/lojaDoSeuZe.json";

export default function PageHome() {

	return (
		<div
			className="
			grid
			justify-center
			items-center
		 	space-y-25"
		>
			<div>
				<Text variant="zilla-lg">Conheça alguma de nossas lojas:</Text>
			</div>

			<div className="flex flex-wrap gap-4">
				<Card
					image={mundialACabamentos.image}
					name={mundialACabamentos.name}
					description={mundialACabamentos.description}
					products={mundialACabamentos.products}
					services={mundialACabamentos.services}
					adress={mundialACabamentos.adress}
				/>

				<Card
					image={suzanaModas.image}
					name={suzanaModas.name}
					description={suzanaModas.description}
					products={suzanaModas.products}
					services={suzanaModas.services}
					adress={suzanaModas.adress}
				/>

				<Card
					image={LojaDoSeuZe.image}
					name={LojaDoSeuZe.name}
					description={LojaDoSeuZe.description}
					products={LojaDoSeuZe.products}
					services={LojaDoSeuZe.services}
					adress={LojaDoSeuZe.adress}
				/>
			</div>
		</div>
	);
}
