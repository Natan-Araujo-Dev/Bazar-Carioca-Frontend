import { NavLink } from "react-router";
import { useUserInfoContext } from "../contexts/userInfoContext";
import { resetCookies } from "../cookies/userCookie";
import Text from "./text";

export default function ButtonCreateAccount() {
	const { userLogged, setUserLogged, setUserId, setUserName } =
		useUserInfoContext();

	if (userLogged) {
		return (
			<div>
				<NavLink
					to="/"
					onClick={() => {
						resetCookies();
						setUserLogged(false);
						setUserId("");
						setUserName("");

						console.log("logout");
					}}
					className="expand
					flex h-full p-2 justify-center items-center"
				>
					<Text variant="inter-header-selectable">Sair</Text>
				</NavLink>
			</div>
		);
	}

	return (
		<div>
			<NavLink
				to="/criar"
				className="expand
				flex h-full p-2 justify-center items-center"
			>
				<Text variant="inter-header-selectable">Criar conta</Text>
			</NavLink>
		</div>
	);
}

/*
import { NavLink } from "react-router";
import { getUserIdCookie, resetCookies } from "../cookies/userCookie";
import { getShopkeeperById } from "../hooks/useShopkeeper";
import Text from "./text";

export default function ButtonCreateAccount() {
	const userId = getUserIdCookie();
	const userName = getShopkeeperById(userId)?.name;

	if (userName) {
		return (
			<div>
				<NavLink
					to="/"
					onClick={() => {
						resetCookies();
						console.log("logout");
					}}
					className="expand
					flex h-full p-2 justify-center items-center"
				>
					<Text variant="inter-header-selectable">Sair</Text>
				</NavLink>
			</div>
		);
	}

	return (
		<div>
			<NavLink
				to="/criar"
				className="expand
				flex h-full p-2 justify-center items-center"
			>
				<Text variant="inter-header-selectable">Criar conta</Text>
			</NavLink>
		</div>
	);
}

*/
