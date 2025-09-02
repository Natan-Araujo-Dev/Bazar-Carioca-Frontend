import { NavLink } from "react-router";
import { useUserInfoContext } from "../contexts/userInfoContext";
import Text from "./text";

export default function ButtonLogin() {
	const { userLogged, userId, userName } = useUserInfoContext();

	if (userLogged) {
		return (
			<div>
				<NavLink
					to={`/lojas/lojista/${userId}`}
					className="expand flex h-full p-2 justify-center items-center"
					onClick={() => {}}
				>
					<Text variant="inter-header-selectable">{userName}</Text>
				</NavLink>
			</div>
		);
	}

	return (
		<div>
			<NavLink
				to="/login"
				className="expand flex h-full p-2 justify-center items-center"
			>
				<Text variant="inter-header-selectable">Entrar</Text>
			</NavLink>
		</div>
	);
}
