import React, { type Dispatch, type SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStore } from "../api/endpointStore";
import ImageNotFound from "../assets/Image-not-found.png";
import ButtonText from "../base-components/button-text";
import InputFieldSpan from "../base-components/input-field-span";
import Text from "../base-components/text";
import { useInfoContext } from "../contexts/infoContext";
import { getUserIdCookie } from "../cookies/userCookie";
import type CreateStoreDTO from "../models/DTOs/createStoreDTO";

export default function PageCreateStore() {
	const { setInfo } = useInfoContext();
	setInfo("Criando loja");

	const [createStoreDTO, setCreateStoreDTO] = useState<CreateStoreDTO>({
		shopkeeperId: getUserIdCookie(),
		name: "",
		file: null,
		cellphoneNumber: "",
		neighborhood: "",
		street: "",
		number: "",

		openingTimeHour: "",
		openingTimeMinute: "",

		closingTimeHour: "",
		closingTimeMinute: "",
	});

	const windowsWidth = window.innerWidth;

	if (windowsWidth < 720) {
		return (
			<PageCreateStoreMobile
				createStoreDTO={createStoreDTO}
				setCreateStoreDTO={setCreateStoreDTO}
			/>
		);
	}

	return (
		<PageCreateStoreDesktop
			createStoreDTO={createStoreDTO}
			setCreateStoreDTO={setCreateStoreDTO}
		/>
	);
}

function PageCreateStoreDesktop({
	createStoreDTO,
	setCreateStoreDTO,
}: {
	createStoreDTO: CreateStoreDTO;
	setCreateStoreDTO: Dispatch<SetStateAction<CreateStoreDTO>>;
}) {
	const navigate = useNavigate();

	const [message, setMessage] = React.useState("Criar loja");

	return (
		<div>
			<div className="flex flex-row h-70 gap-x-4">
				<div
					className="
						flex h-70 w-70
						bg-blue-extralight
						justify-center items-center
						rounded-sm "
				>
					<label className="cursor-pointer w-full h-full">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							onChange={(e) =>
								setCreateStoreDTO((s) => ({
									...s,
									file: e.target.files ? e.target.files[0] : null,
								}))
							}
						/>

						<img
							className="flex object-cover w-full h-full rounded-md shadow-md"
							src={
								createStoreDTO.file
									? URL.createObjectURL(createStoreDTO.file)
									: ImageNotFound
							}
							alt="imagem"
						/>
					</label>
				</div>

				<div className="flex flex-col justify-between gap-y-2">
					<div className="flex flex-col">
						<div>
							<InputFieldSpan
								className="w-full h-7"
								placeHolder="Nome da sua loja"
								value={createStoreDTO.name}
								onChange={(v) => setCreateStoreDTO((s) => ({ ...s, name: v }))}
							/>
						</div>

						<div className="flex ">
							<Text className="text-blue-medium flex items-center gap-1">
								Horário de funcionamento: de
								<Text variant="inter-md" className="text-black">
									<InputFieldSpan
										className="w-7 h-4"
										placeHolder="00"
										value={createStoreDTO.openingTimeHour}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, openingTimeHour: v }))
										}
									/>
								</Text>
								{":"}
								<Text variant="inter-md" className="text-black">
									<InputFieldSpan
										className="w-7 h-4"
										placeHolder="00"
										value={createStoreDTO.openingTimeMinute}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, openingTimeMinute: v }))
										}
									/>
								</Text>
								{" até "}
								<Text variant="inter-md" className="text-black">
									<InputFieldSpan
										className="w-7 h-4"
										placeHolder="00"
										value={createStoreDTO.closingTimeHour}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, closingTimeHour: v }))
										}
									/>
								</Text>
								{":"}
								<Text variant="inter-md" className="text-black">
									<InputFieldSpan
										className="w-7 h-4"
										placeHolder="00"
										value={createStoreDTO.closingTimeMinute}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, closingTimeMinute: v }))
										}
									/>
								</Text>
							</Text>
						</div>
					</div>

					<div className="flex flex-row h-full gap-x-4">
						<div className="flex w-50 items-end">
							<InputFieldSpan
								className="h-full w-full"
								placeHolder="Descrição"
								value={createStoreDTO.description}
								onChange={(v) =>
									setCreateStoreDTO((s) => ({ ...s, description: v }))
								}
							/>
						</div>

						<div className="flex flex-col justify-between">
							<div className="flex max-w-50">
								<Text className="text-[10px]">
									<Text className="text-[15px]">Endereço:</Text>
									<br />
									<InputFieldSpan
										className="max-w-48 w-full"
										placeHolder="Rua"
										value={createStoreDTO.street}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, street: v }))
										}
									/>{" "}
									{" ,"}
									<InputFieldSpan
										className="max-w-14 w-full h-4"
										placeHolder="Número"
										value={createStoreDTO.number}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, number: v }))
										}
									/>
									<Text className="text-[15px]">{" -"}</Text>
									<InputFieldSpan
										className="max-w-48 w-full"
										placeHolder="Bairro"
										value={createStoreDTO.neighborhood}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, neighborhood: v }))
										}
									/>
									{" , Rio de Janeiro - RJ"}
								</Text>
							</div>

							<div className="flex items-center">
								<Text className="text-[10px]">
									<Text className="text-[15px]">Celular:</Text> <br />
									<Text className="text-[15px]">{"21 "}</Text>
									<InputFieldSpan
										className="w-fit h-4"
										placeHolder="Número de celular"
										value={createStoreDTO.cellphoneNumber}
										onChange={(v) =>
											setCreateStoreDTO((s) => ({ ...s, cellphoneNumber: v }))
										}
									/>
								</Text>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-20">
				<ButtonText
					value={message}
					onClick={() => {
						setMessage("Carregando.");

						if (
							createStoreDTO.name !== "" &&
							createStoreDTO.description !== "" &&
							createStoreDTO.cellphoneNumber !== "" &&
							createStoreDTO.neighborhood !== "" &&
							createStoreDTO.street !== "" &&
							createStoreDTO.number !== "" &&
							createStoreDTO.openingTimeHour !== "" &&
							createStoreDTO.openingTimeMinute !== "" &&
							createStoreDTO.closingTimeHour !== "" &&
							createStoreDTO.closingTimeMinute !== ""
						) {
							try {
								createStore(createStoreDTO);
								navigate(`/lojas/lojista/${getUserIdCookie()}`);
							} catch (error) {
								setMessage("Houve um erro.");
								console.log(error);
							}
						} else {
							setMessage("Informações vazias.");
						}
					}}
				/>
			</div>
		</div>
	);
}

function PageCreateStoreMobile({
	createStoreDTO,
	setCreateStoreDTO,
}: {
	createStoreDTO: CreateStoreDTO;
	setCreateStoreDTO: Dispatch<SetStateAction<CreateStoreDTO>>;
}) {
	const navigate = useNavigate();

	const [message, setMessage] = React.useState("Criar loja");

	return (
		<div className="flex flex-col gap-y-2">
			{/* Nome */}
			<div>
				<InputFieldSpan
					className="w-full h-7"
					placeHolder="Nome da sua loja"
					value={createStoreDTO.name}
					onChange={(v) => setCreateStoreDTO((s) => ({ ...s, name: v }))}
				/>
			</div>

			{/* Horário de funcionamento */}
			<div className="flex">
				<Text className="text-blue-medium flex items-center gap-1">
					Horário de funcionamento: de
					<Text variant="inter-md" className="text-black">
						<InputFieldSpan
							className="w-7 h-4"
							placeHolder="00"
							value={createStoreDTO.openingTimeHour}
							onChange={(v) =>
								setCreateStoreDTO((s) => ({ ...s, openingTimeHour: v }))
							}
						/>
					</Text>
					{":"}
					<Text variant="inter-md" className="text-black">
						<InputFieldSpan
							className="w-7 h-4"
							placeHolder="00"
							value={createStoreDTO.openingTimeMinute}
							onChange={(v) =>
								setCreateStoreDTO((s) => ({ ...s, openingTimeMinute: v }))
							}
						/>
					</Text>
					{" até "}
					<Text variant="inter-md" className="text-black">
						<InputFieldSpan
							className="w-7 h-4"
							placeHolder="00"
							value={createStoreDTO.closingTimeHour}
							onChange={(v) =>
								setCreateStoreDTO((s) => ({ ...s, closingTimeHour: v }))
							}
						/>
					</Text>
					{":"}
					<Text variant="inter-md" className="text-black">
						<InputFieldSpan
							className="w-7 h-4"
							placeHolder="00"
							value={createStoreDTO.closingTimeMinute}
							onChange={(v) =>
								setCreateStoreDTO((s) => ({ ...s, closingTimeMinute: v }))
							}
						/>
					</Text>
				</Text>
			</div>

			{/* Imagem e descrição*/}
			<div className="flex flex-row gap-x-2">
				{/* Imagem */}
				<div
					className="
					flex h-40 w-40
					bg-blue-extralight
					justify-center items-center
					rounded-sm"
				>
					<label className="cursor-pointer w-full h-full">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							onChange={(e) =>
								setCreateStoreDTO((s) => ({
									...s,
									file: e.target.files ? e.target.files[0] : null,
								}))
							}
						/>

						<img
							className="flex object-cover w-full h-full rounded-md shadow-md"
							src={
								createStoreDTO.file
									? URL.createObjectURL(createStoreDTO.file)
									: ImageNotFound
							}
							alt="imagem"
						/>
					</label>
				</div>

				{/* descrição */}
				<div className="flex w-50 items-end">
					<InputFieldSpan
						className="h-full w-full"
						placeHolder="Descrição"
						value={createStoreDTO.description}
						onChange={(v) =>
							setCreateStoreDTO((s) => ({ ...s, description: v }))
						}
					/>
				</div>
			</div>

			{/* Endereço */}
			<div className="flex max-w-50">
				<Text className="text-[10px]">
					<Text className="text-[15px]">Endereço:</Text>
					<br />
					<InputFieldSpan
						className="max-w-48 w-full"
						placeHolder="Rua"
						value={createStoreDTO.street}
						onChange={(v) => setCreateStoreDTO((s) => ({ ...s, street: v }))}
					/>{" "}
					{" ,"}
					<InputFieldSpan
						className="max-w-14 w-full h-4"
						placeHolder="Número"
						value={createStoreDTO.number}
						onChange={(v) => setCreateStoreDTO((s) => ({ ...s, number: v }))}
					/>
					<Text className="text-[15px]">{" -"}</Text>
					<InputFieldSpan
						className="max-w-48 w-full"
						placeHolder="Bairro"
						value={createStoreDTO.neighborhood}
						onChange={(v) =>
							setCreateStoreDTO((s) => ({ ...s, neighborhood: v }))
						}
					/>
					{" , Rio de Janeiro - RJ"}
				</Text>
			</div>

			{/* celular */}
			<div className="flex items-center">
				<Text className="text-[10px]">
					<Text className="text-[15px]">Celular:</Text> <br />
					<Text className="text-[15px]">{"21 "}</Text>
					<InputFieldSpan
						className="w-fit h-4"
						placeHolder="Número de celular"
						value={createStoreDTO.cellphoneNumber}
						onChange={(v) =>
							setCreateStoreDTO((s) => ({ ...s, cellphoneNumber: v }))
						}
					/>
				</Text>
			</div>

			{/* botão */}
			<div className="flex justify-center mt-20">
				<ButtonText
					value={message}
					onClick={() => {
						setMessage("Carregando.");

						if (
							createStoreDTO.name !== "" &&
							createStoreDTO.description !== "" &&
							createStoreDTO.cellphoneNumber !== "" &&
							createStoreDTO.neighborhood !== "" &&
							createStoreDTO.street !== "" &&
							createStoreDTO.number !== "" &&
							createStoreDTO.openingTimeHour !== "" &&
							createStoreDTO.openingTimeMinute !== "" &&
							createStoreDTO.closingTimeHour !== "" &&
							createStoreDTO.closingTimeMinute !== ""
						) {
							try {
								createStore(createStoreDTO);
								navigate(`/lojas/lojista/${getUserIdCookie()}`);
							} catch (error) {
								setMessage("Houve um erro.");
								console.log(error);
							}
						} else {
							setMessage("Informações vazias.");
						}
					}}
				/>
			</div>
		</div>
	);
}
