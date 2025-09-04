import { type Dispatch, type SetStateAction, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../api/endpointProduct";
import ImageNotFound from "../assets/Image-not-found.png";
import ButtonText from "../base-components/button-text";
import InputField from "../base-components/input-field";
import InputFieldSpan from "../base-components/input-field-span";
import Text from "../base-components/text";
import { useInfoContext } from "../contexts/infoContext";
import { getUserIdCookie } from "../cookies/userCookie";
import { getProductTypeById } from "../hooks/useProductType";
import { getStoreById } from "../hooks/useStore";
import type CreateProductDTO from "../models/DTOs/createProductDTO";

export default function PageCreateProduct() {
	const { id } = useParams();

	const productType = getProductTypeById(id);
	const storeId = productType?.storeId;
	const shopkeeperId = getStoreById(storeId?.toString())?.shopkeeperId;
	const isOwner = getUserIdCookie() === shopkeeperId;

	const { setInfo } = useInfoContext();
	setInfo(`Criando produto do tipo ${productType?.name}`);

	const [productDTO, setProductDTO] = useState<CreateProductDTO>({
		productTypeId: id?.toString() || "0",
		name: "",
		price: "",
		file: null,
		stock: "",
		description: "",
	});

	const windowsWidth = window.innerWidth;

	if (windowsWidth < 720) {
		return (
			<MobilePageCreateProduct
				storeId={storeId?.toString() ?? "0"}
				productDTO={productDTO}
				setProductDTO={setProductDTO}
			/>
		);
	}

	if (!isOwner) {
		return <div>Você não pode criar produtos para essa loja.</div>;
	}

	return (
		<DesktopPageCreateProduct
			storeId={storeId?.toString() ?? "0"}
			productDTO={productDTO}
			setProductDTO={setProductDTO}
		/>
	);
}

function DesktopPageCreateProduct({
	storeId,
	productDTO,
	setProductDTO,
}: {
	storeId: string;
	productDTO: CreateProductDTO;
	setProductDTO: Dispatch<SetStateAction<CreateProductDTO>>;
}) {
	const navigate = useNavigate();

	const [buttonMessage, setButtonMessage] = useState("Criar produto");
	return (
		<div
			className="
			flex flex-col
			justify-center items-center
			gap-y-7"
		>
			<div className="flex flex-col w-full gap-y-2">
				{/* Nome */}
				<div className="flex flex-row gap-x-2">
					<InputField
						info=""
						placeHolder="Nome do produto"
						value={productDTO.name}
						onChange={(v) => setProductDTO((s) => ({ ...s, name: v }))}
					/>
				</div>

				<div className="flex flex-row gap-x-2 items-top">
					{/* Imagem */}
					<div
						className="
						flex h-70 w-70
						bg-blue-extralight
						justify-center items-center
						rounded-sm"
					>
						<label className="cursor-pointer h-70 w-70">
							<input
								type="file"
								accept="image/*"
								className="hidden"
								onChange={(e) =>
									setProductDTO((s) => ({
										...s,
										file: e.target.files ? e.target.files[0] : null,
									}))
								}
							/>

							<img
								className="flex object-cover h-70 w-70 rounded-md shadow-md"
								src={
									productDTO.file
										? URL.createObjectURL(productDTO.file)
										: ImageNotFound
								}
								alt="imagem"
							/>
						</label>
					</div>

					<div className="flex flex-col">
						{/* Preço */}
						<div className="flex flex-row gap-x-2 items-center">
							<Text variant="zilla-lg">R$</Text>
							<InputField
								info=""
								placeHolder="Preço"
								value={productDTO.price}
								onChange={(v) => setProductDTO((s) => ({ ...s, price: v }))}
							/>
						</div>

						{/* Descrição */}
						<div className="flex flex-row w-full h-full gap-x-2 justify-end items-end">
							<InputFieldSpan
								className="flex w-full h-full"
								placeHolder="Descrição"
								value={productDTO.description}
								onChange={(v) =>
									setProductDTO((s) => ({ ...s, description: v }))
								}
							/>
						</div>
					</div>

					{/* Estoque */}
					<div className="flex flex-row gap-x-2">
						<Text variant="zilla-lg">Estoque: </Text>
						<InputField
							info=""
							placeHolder="Quantidade em estoque"
							value={productDTO.stock}
							onChange={(v) => setProductDTO((s) => ({ ...s, stock: v }))}
						/>
					</div>
				</div>
			</div>

			{/* BOTÃO CONFIRMA */}
			<div>
				<ButtonText
					value={buttonMessage}
					onClick={async () => {
						setButtonMessage("Carregando");

						if (productIsValid(productDTO)) {
							const sucess = (await createProduct(productDTO)).success;

							if (sucess) {
								navigate(`/lojas/${storeId}`);
							} else {
								setButtonMessage("Houve um erro.");
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

function MobilePageCreateProduct({
	storeId,
	productDTO,
	setProductDTO,
}: {
	storeId: string;
	productDTO: CreateProductDTO;
	setProductDTO: Dispatch<SetStateAction<CreateProductDTO>>;
}) {
	const navigate = useNavigate();

	const [buttonMessage, setButtonMessage] = useState("Criar produto");
	return (
		<div
			className="
			flex flex-col
			justify-center items-center
			gap-y-7"
		>
			<div className="flex flex-col w-full gap-y-2">
				{/* Nome */}
				<div className="flex flex-row gap-x-2">
					<InputField
						info=""
						placeHolder="Nome do produto"
						value={productDTO.name}
						onChange={(v) => setProductDTO((s) => ({ ...s, name: v }))}
					/>
				</div>

				{/* Preço */}
				<div className="flex flex-row gap-x-2 items-center">
					<Text variant="zilla-lg">R$</Text>
					<InputField
						info=""
						placeHolder="Preço"
						value={productDTO.price}
						onChange={(v) => setProductDTO((s) => ({ ...s, price: v }))}
					/>
				</div>

				{/* Estoque */}
				<div className="flex flex-row gap-x-2">
					<Text variant="zilla-md">Estoque: </Text>
					<InputField
						info=""
						placeHolder="Quantidade em estoque"
						value={productDTO.stock}
						onChange={(v) => setProductDTO((s) => ({ ...s, stock: v }))}
					/>
				</div>

				{/* Imagem */}
				<div
					className="
					flex h-70 w-70
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
								setProductDTO((s) => ({
									...s,
									file: e.target.files ? e.target.files[0] : null,
								}))
							}
						/>

						<img
							className="flex object-cover w-full h-full rounded-md shadow-md"
							src={
								productDTO.file
									? URL.createObjectURL(productDTO.file)
									: ImageNotFound
							}
							alt="imagem"
						/>
					</label>
				</div>

				{/* Descrição */}
				<div className="flex flex-row w-full h-full gap-x-2">
					<InputFieldSpan
						className="flex w-full h-40"
						placeHolder="Descrição"
						value={productDTO.description}
						onChange={(v) => setProductDTO((s) => ({ ...s, description: v }))}
					/>
				</div>
			</div>

			{/* BOTÃO CONFIRMA */}
			<div>
				<ButtonText
					value={buttonMessage}
					onClick={async () => {
						setButtonMessage("Carregando");

						if (productIsValid(productDTO)) {
							const sucess = (await createProduct(productDTO)).success;

							if (sucess) {
								navigate(`/lojas/${storeId}`);
							} else {
								setButtonMessage("Houve um erro.");
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

function productIsValid(productDTO: CreateProductDTO) {
	if (
		productDTO.name.trim() === "" ||
		productDTO.price.trim() === "" ||
		Number.isNaN(Number(productDTO.price))
	) {
		return false;
	}
	return true;
}
