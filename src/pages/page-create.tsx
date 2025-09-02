import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserToShopkeeper, createAspNetUser } from "../api/endpointAuth";
import { createShopkeeper } from "../api/endpointShopkeeper";
import ButtonText from "../base-components/button-text";
import ErrorMessage from "../base-components/error-message";
import FormularyHeader from "../base-components/formulary-header";
import InputField from "../base-components/input-field";
import { useInfoContext } from "../contexts/infoContext";
import type ShopkeeperCreateDTO from "../models/DTOs/shopkeeperCreateDTO";

export default function PageCreate() {
	const { setInfo } = useInfoContext();
	setInfo("Criar conta");
	const [shopkeeperDto, setShopkeeperDTO] = useState<ShopkeeperCreateDTO>({
		Name: "",
		Email: "",
		Password: "",
	});

	const [response, setResponse] = useState(true);
	const [buttonMessage, setButtonMessage] = useState("Criar conta");
	const navigate = useNavigate();

	return (
		<div
			className="
			flex flex-col
			md:w-100
			not-md:70
			items-center
			gap-y-4"
		>
			<FormularyHeader text="Quer criar sua conta? Preencha o formulário" />

			<div
				className="
				flex flex-col
				items-center
				w-full
				p-5
				gap-y-6
				border-2 border-blue-heavy
				rounded-sm"
			>
				<InputField
					info="Nome"
					placeHolder="Nome"
					value={shopkeeperDto.Name}
					onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Name: v }))}
				/>

				<div className="flex flex-col w-full">
					<ErrorMessage
						errorMessage="Email em uso. Use outro email."
						condition={() => response === false}
					/>

					<InputField
						info="Email"
						placeHolder="email@example.com"
						value={shopkeeperDto.Email}
						onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Email: v }))}
					/>
				</div>

				<InputField
					info="Senha"
					placeHolder="Sua senha"
					value={shopkeeperDto.Password}
					onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Password: v }))}
				/>

				<div>
					<ButtonText
						value={buttonMessage}
						onClick={async () => {
							setButtonMessage("Carregando...");

							let sucess = false;

							try {
								sucess = (await createShopkeeper(shopkeeperDto)).success;

								setResponse(sucess);

								await createAspNetUser(shopkeeperDto);
								await addUserToShopkeeper(shopkeeperDto);
							} catch (error) {
								console.log(error);
								setButtonMessage("Criar conta");
							}

							if (sucess) {
								navigate("/lojas/2");
							}

							setButtonMessage("Criar conta");
							// Ir para login ou lojas do lojista direto.
						}}
					/>
				</div>
			</div>
		</div>
	);
}
