import Text from "../base-components/text";
import type product from "../objects/product";

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
						className="flex object-cover self-stretch max-w-1/1 max-h-1/1 rounded-md"
						src={product?.imageUrl}
						alt={product?.name}
					/>
				</div>

				<div className="flex flex-col max-w-120 justify-between">
					<div className="flex flex-row justify-between">
						<div>
							<Text variant="zilla-lg">R$ {product?.price}</Text>
						</div>
						<div>
							<Text variant="zilla-md">
								Estoque:
								{product?.stock === null && (
									<span>
										<br />
										Não informado
									</span>
								)}
								{product?.stock}
							</Text>
						</div>
					</div>

					<div className="flex w-70">
						<Text>
							{product?.description}
							{product?.description === null && (
								<span>
									<br />
									Descrição não informada.
								</span>
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
						Estoque:
						{product?.stock === null && (
							<span>
								<br />
								Não informado
							</span>
						)}
						{product?.stock}
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
					className="flex object-cover self-stretch max-w-1/1 max-h-1/1 rounded-md"
					src={product?.imageUrl}
					alt={product?.name}
				/>
			</div>

			<div className="flex w-70">
				<Text>
					{product?.description}
					{product?.description === null && (
						<span>
							<br />
							Descrição não informada.
						</span>
					)}
				</Text>
			</div>
		</div>
	);
}
