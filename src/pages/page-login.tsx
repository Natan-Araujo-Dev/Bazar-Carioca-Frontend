import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/endpointAuth";
import { getShopkeeperByEmail } from "../api/endpointShopkeeper";
import ButtonText from "../base-components/button-text";
import ErrorMessage from "../base-components/error-message";
import FormularyHeader from "../base-components/formulary-header";
import InputField from "../base-components/input-field";
import { useInfoContext } from "../contexts/infoContext";
import { useUserInfoContext } from "../contexts/userInfoContext";
import { setUserIdCookie, setUserNameCookie } from "../cookies/userCookie";
import type LoginModelDTO from "../models/DTOs/loginModelDTO";

export default function PageLogin() {
	const { setInfo } = useInfoContext();
	setInfo("Fazer login");

	const { setUserLogged, setUserId, setUserName } = useUserInfoContext();

	const [loginDTO, setLoginDTO] = useState<LoginModelDTO>({
		userEmail: "",
		password: "",
	});

	const navigate = useNavigate();

	const [response, setResponse] = useState(true);
	const [buttonMessage, setButtonMessage] = useState("Fazer login");

	return (
		<div
			className="
			flex flex-col
			md:w-100
			not-md:70
			items-center
			gap-y-4"
		>
			<FormularyHeader text="Quer fazer login? Preencha o formulário:" />

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
				<div className="flex flex-col w-full">
					<ErrorMessage
						errorMessage="Email ou senhas erradas."
						condition={() => response === false}
					/>

					<InputField
						info="Email"
						placeHolder="email@example.com"
						value={loginDTO.userEmail}
						onChange={(v) => setLoginDTO((s) => ({ ...s, userEmail: v }))}
					/>
				</div>

				<InputField
					info="Senha"
					placeHolder="Sua senha"
					value={loginDTO.password}
					onChange={(v) => setLoginDTO((s) => ({ ...s, password: v }))}
				/>

				<div>
					<ButtonText
						value={buttonMessage}
						onClick={async () => {
							setButtonMessage("Carregando...");

							let sucess = false;

							try {
								sucess = (await login(loginDTO)).success;
							} catch {}

							setResponse(sucess);

							if (sucess) {
								const shopkeeper = (
									await getShopkeeperByEmail(loginDTO.userEmail)
								).data;

								const shopkeeperId = shopkeeper.id;

								setUserIdCookie(shopkeeperId.toString());
								setUserNameCookie(shopkeeper.name);
								setUserLogged(true);
								setUserId(shopkeeperId.toString());
								setUserName(shopkeeper.name);

								navigate(`/lojas/lojista/${shopkeeperId}`);
							}

							setButtonMessage("Fazer login");
						}}
					/>
				</div>
			</div>
		</div>
	);
}
