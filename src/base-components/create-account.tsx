import { NavLink } from "react-router";
import Text from "./text";

export default function CreateAccount() {
	return (
		<div>
			<NavLink to="/criar" className="flex h-full w-20 justify-center items-center">
				<Text variant="inter-header-selectable">Criar conta</Text>
			</NavLink>
		</div>
	);
}
