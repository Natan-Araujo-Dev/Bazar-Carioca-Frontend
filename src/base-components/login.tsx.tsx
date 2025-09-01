import { NavLink } from "react-router";
import Text from "./text";

export default function CreateAccount() {
	return (
		<div>
			<NavLink to="/login" className="expand flex h-full p-2 justify-center items-center">
				<Text variant="inter-header-selectable">Entrar</Text>
			</NavLink>
		</div>
	);
}
