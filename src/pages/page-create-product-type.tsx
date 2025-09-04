import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProductType } from "../api/endpointProductType";
import ButtonText from "../base-components/button-text";
import InputField from "../base-components/input-field";
import Text from "../base-components/text";
import { getUserIdCookie } from "../cookies/userCookie";
import { getStoreById } from "../hooks/useStore";
import type CreateProductTypeDTO from "../models/DTOs/createProductTypeDTO";

export default function PageCreateProductType() {
	const { id } = useParams();

	const navigate = useNavigate();

	const [productTypeDTO, setProductTypeDTO] = useState<CreateProductTypeDTO>({
		storeId: id ?? "",
		name: "",
	});

	const [buttonMessage, setButtonMessage] = useState("Criar tipo de produto");

	const isOwner = getUserIdCookie() === getStoreById(id)?.shopkeeperId;

	if (!isOwner) {
		return <div>Você não pode criar tipos de produto para essa loja.</div>;
	}

	return (
		<div
			className="
			flex flex-col
			justify-center items-start
			gap-y-7"
		>
			<div className="flex flex-col w-full">
				<Text variant="zilla-md">Nome do tipo de produto:</Text>
				<div className="flex flex-row gap-x-2">
					<InputField
						info=""
						placeHolder="Nome"
						value={productTypeDTO.name}
						onChange={(v) => setProductTypeDTO((s) => ({ ...s, name: v }))}
					/>
				</div>
			</div>

			<div>
				<ButtonText
					value={buttonMessage}
					onClick={async () => {
						setButtonMessage("Carregando");

						if (productTypeIsValid(productTypeDTO)) {
							const sucess = (await createProductType(productTypeDTO)).success;

							if (sucess) {
								setButtonMessage("Tipo de produto criado");
								navigate(`/lojas/${id}`);
							} else {
								setButtonMessage("Houve um erro");
							}
						} else {
							setButtonMessage("Preencha tudo");
						}
					}}
				/>
			</div>
		</div>
	);
}

function productTypeIsValid(productTypeDTO: CreateProductTypeDTO) {
	if (productTypeDTO.name.trim() === "") {
		return false;
	}
	return true;
}
