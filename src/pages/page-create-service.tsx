import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createService } from "../api/endpointService";
import ButtonText from "../base-components/button-text";
import InputField from "../base-components/input-field";
import Text from "../base-components/text";
import type CreateServiceDTO from "../models/DTOs/CreateServiceDTO";

export default function PageCreateService() {
	const { id } = useParams();

	const navigate = useNavigate();

	const [serviceDTO, setServiceDTO] = useState<CreateServiceDTO>({
		storeId: id ?? "",
		name: "",
		averagePrice: "",
	});

	function serviceIsValid() {
		if (
			serviceDTO.name.trim() === "" ||
			serviceDTO.averagePrice.trim() === "" ||
			Number.isNaN(Number(serviceDTO.averagePrice))
		) {
			return false;
		}
		return true;
	}

	const [buttonMessage, setButtonMessage] = useState("Criar serviço");

	return (
		<div
			className="
			flex flex-col
			justify-center items-start
			gap-y-7"
		>
			<div className="flex flex-col w-full">
				<Text variant="zilla-md">Nome do serviço:</Text>
				<div className="flex flex-row gap-x-2">
					<InputField
						info=""
						placeHolder="Nome"
						value={serviceDTO.name}
						onChange={(v) => setServiceDTO((s) => ({ ...s, name: v }))}
					/>
				</div>
			</div>

			<div>
				Preço médio do serviço:
				<div className="flex flex-row items-center gap-x-2">
					<Text variant="zilla-md">R$</Text>

					<InputField
						info=""
						placeHolder="Valor"
						value={serviceDTO.averagePrice}
						onChange={(v) => setServiceDTO((s) => ({ ...s, averagePrice: v }))}
					/>
				</div>
			</div>

			<div>
				<ButtonText
					value={buttonMessage}
					onClick={async () => {
						setButtonMessage("Carregando");

						if (serviceIsValid()) {
							console.log("criou");

							await createService(serviceDTO);

							navigate(`/lojas/${id}`);

							return;
						} else {
							console.log("NÃO criou");
						}

						setButtonMessage("Criar serviço");
					}}
				/>
			</div>
		</div>
	);
}
