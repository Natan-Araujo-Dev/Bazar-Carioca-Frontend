import { useState } from "react";
import Icon from "../base-components/icon";
import InputField from "../base-components/input-field";
import Text from "../base-components/text";
import {
	addUserToShopkeeper,
	createAspNetUser,
} from "../hooks/createAspNetUser";
import { createShopkeeper } from "../hooks/createShopkeeper";
import erroIcon from "../icons/errorIcon.svg?react";
import type ShopkeeperCreateDTO from "../objects/DTOs/shopkeeperCreateDTO";

export default function PageCreate() {
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
			<div
				className="
				flex
				w-full
				justify-center
				p-1
				rounded-md
				bg-blue-medium"
			>
				<Text
					variant="zilla-md"
					className="flex text-center text-blue-extralight"
				>
					Quer criar sua conta?
					<br />
					Preencha este cadastro:
				</Text>
			</div>

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
					<div className="flex w-full">
						{response === false && (
							<div className="flex flex-row gap-2">
								<Icon svg={erroIcon} className="fill-red-600" />
								<Text variant="zilla-md" className="text-red-600">
									Email em uso. Use outro email.
								</Text>
							</div>
						)}
					</div>

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
					<input
						type="button"
						value="Criar conta"
						onClick={async () => {
							const createResponse = (await createShopkeeper(shopkeeperDto))
								.success;

							setResponse(createResponse);
							console.log(createResponse);

							await createAspNetUser(shopkeeperDto);
							await addUserToShopkeeper(shopkeeperDto);
						}}
						className="
						flex
						md:w-50
						not-md:w-28
						text-blue-extralight
						expand
						bg-blue-medium rounded-sm"
					/>
				</div>
			</div>
		</div>
	);
}
