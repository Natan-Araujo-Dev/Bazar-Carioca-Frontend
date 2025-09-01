import Text from "../base-components/text";
import type product from "../models/product";

interface ProductInfoProps extends React.ComponentProps<"div"> {
	product?: product | null;
}

export default function PageProduct({ product }: ProductInfoProps) {
	const windowsWidth = window.innerWidth;

	if (windowsWidth < 720) {
		return <MobilePageProduct product={product} />;
	}

	return <DesktopPageProduct product={product} />;
}

function DesktopPageProduct({ product }: ProductInfoProps) {
	return (
		<div className="flex flex-col gap-y-15">
			<div>
				<Text className="text-[40px] font-zilla-slab">{product?.name}</Text>
			</div>

			<div className="flex flex-row gap-x-4">
				<div
					className="
               flex w-70 h-70
               bg-blue-extralight 
               rounded-md"
				>
					<img
						className="flex object-cover self-stretch w-full h-full rounded-md shadow-md"
						src={product?.imageUrl}
						alt={product?.name}
					/>
				</div>

				<div className="flex flex-col max-w-120 justify-between">
					<div className="flex flex-row justify-between gap-x-40">
						<div>
							<Text variant="zilla-lg">R$ {product?.price}</Text>
						</div>

						<div>
							<Text variant="zilla-lg">
								Estoque:{" "}
								{!product?.stock ? (
									<Text variant="zilla-md">
										<br />
										Não informado
									</Text>
								) : (
									<span>{product.stock}</span>
								)}
							</Text>
						</div>
					</div>

					<div className="flex w-70">
						<Text>
							{!product?.description ? (
								<span>Descrição não informada.</span>
							) : (
								<span>{product?.description}</span>
							)}
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
}

function MobilePageProduct({ product }: ProductInfoProps) {
	return (
		<div className="flex flex-col gap-y-4">
			<div className="w-70">
				<Text className="text-[40px] font-zilla-slab">{product?.name}</Text>
			</div>

			<div className="flex flex-col justify-start">
				<div>
					<Text variant="zilla-lg">R$ {product?.price}</Text>
				</div>

				<div>
					<Text variant="zilla-md">
						Estoque:{" "}
						{!product?.stock ? (
							<span>Não informado</span>
						) : (
							<span>{product.stock}</span>
						)}
					</Text>
				</div>
			</div>

			<div
				className="
               flex w-70 h-70
               bg-blue-extralight 
               rounded-md"
			>
				<img
					className="flex object-cover self-stretch w-full h-full rounded-md shadow-md"
					src={product?.imageUrl}
					alt={product?.name}
				/>
			</div>

			<div className="flex w-70">
				<Text>
					{!product?.description ? (
						<span>Descrição não informada.</span>
					) : (
						<span>{product?.description}</span>
					)}
				</Text>
			</div>
		</div>
	);
}
