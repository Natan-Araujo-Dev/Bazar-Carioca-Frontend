import { NavLink } from "react-router";
import Text from "./text";

export default function CreateAccount() {
	return (
		<div>
			<NavLink to="/login" className="expand flex h-full w-20 justify-center items-center">
				<Text variant="inter-header-selectable">Fazer login</Text>
			</NavLink>
		</div>
	);
}
