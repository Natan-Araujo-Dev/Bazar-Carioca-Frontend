import Text from "./text";

export default function SelectDropdown() {
	return (
		<div
			className="
		w-20 h-full
		flex
		rounded-l-md
		bg-gray-medium"
		>
			<select
				name="search-bar-type"
				id="sem id ainda"
				className="
				w-full h-full
				text-xs
				flex justify-center
				whitespace-normal"
			>
				<option value="all">
					<Text>Tudo</Text>
				</option>
				<option value="lojas">
					<Text>Lojas</Text>
				</option>
				<option value="servicos">
					<Text>Serviços</Text>
				</option>
				<option value="tipos-de-produtos">
					<Text>Tipos de produtos</Text>
				</option>
				<option value="produtos">
					<Text>Produtos</Text>
				</option>
			</select>
		</div>
	);
}
