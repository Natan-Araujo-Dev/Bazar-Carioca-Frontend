import { useState } from "react";
import { login } from "../api/endpointAuth";
import ButtonText from "../base-components/button-text";
import ErrorMessage from "../base-components/error-message";
import FormularyHeader from "../base-components/formulary-header";
import InputField from "../base-components/input-field";
import { useInfoContext } from "../contexts/infoContext";
import { getAccessToken, setNewToken } from "../cookies/tokenCookie";
import type LoginModelDTO from "../models/DTOs/loginModelDTO";

export default function PageLogin() {
	const { setInfo } = useInfoContext();
	setInfo("Fazer login");

	const [loginDTO, setLoginDTO] = useState<LoginModelDTO>({
		userEmail: "",
		password: "",
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
						info="Seu email"
						placeHolder="fulano@example.com"
						value={loginDTO.userEmail}
						onChange={(v) => setLoginDTO((s) => ({ ...s, userEmail: v }))}
					/>
				</div>

				<InputField
					info="Sua senha"
					placeHolder="123#SenhaDoFulano#321"
					value={loginDTO.password}
					onChange={(v) => setLoginDTO((s) => ({ ...s, password: v }))}
				/>

				<div>
					<ButtonText
						value="Fazer login"
						onClick={async () => {
							const response = await login(loginDTO);
							const sucess = response.success;
							setResponse(sucess);

							// ir para lojas do lojistas
						}}
					/>
				</div>
			</div>
		</div>
	);
}
