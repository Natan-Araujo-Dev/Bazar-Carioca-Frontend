import { useState } from "react";
import { addUserToShopkeeper, createAspNetUser } from "../api/endpointAuth";
import { createShopkeeper } from "../api/endpointShopkeeper";
import ButtonText from "../base-components/button-text";
import ErrorMessage from "../base-components/error-message";
import FormularyHeader from "../base-components/formulary-header";
import InputField from "../base-components/input-field";
import type ShopkeeperCreateDTO from "../models/DTOs/shopkeeperCreateDTO";

export default function PageLogin() {
	const [shopkeeperDto, setShopkeeperDTO] = useState<ShopkeeperCreateDTO>({
		Name: "",
		Email: "",
		Password: "",
	});

	const [response, setResponse] = useState(true);

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
					info="Seu nome e sobrenome"
					placeHolder="Fulano da Silva"
					value={shopkeeperDto.Name}
					onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Name: v }))}
				/>

				<div className="flex flex-col w-full">
					<ErrorMessage
						errorMessage="Email em uso. Use outro email."
						condition={() => response === false}
					/>

					<InputField
						info="Seu email"
						placeHolder="fulano@example.com"
						value={shopkeeperDto.Email}
						onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Email: v }))}
					/>
				</div>

				<InputField
					info="Sua senha"
					placeHolder="123#SenhaDoFulano#321"
					value={shopkeeperDto.Password}
					onChange={(v) => setShopkeeperDTO((s) => ({ ...s, Password: v }))}
				/>

				<div>
					<ButtonText
						value="Criar conta"
						onClick={async () => {
							const createResponse = (await createShopkeeper(shopkeeperDto))
								.success;

							setResponse(createResponse);
							console.log(createResponse);

							await createAspNetUser(shopkeeperDto);
							await addUserToShopkeeper(shopkeeperDto);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
