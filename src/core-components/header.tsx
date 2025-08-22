import { NavLink } from "react-router";
import Text from "../base-components/text";
import SearchBar from "./search-bar";

export default function Header() {
	return (
		<div
			className="
		w-1/1
		h-20
      flex
      justify-between
		items-center
      bg-blue-medium"
		>
			<div className="m-3">
				<NavLink to="/">
					<Text variant="zilla-lg">
						Bazar <br /> Carioca.com
					</Text>
				</NavLink>
			</div>

			<SearchBar />

			<div className="flex space-x-15 mr-5">
				<div>
					<NavLink to="/criar">
						<Text variant="inter-header-selectable">Criar conta</Text>
					</NavLink>
				</div>

				<div>
					<NavLink to="/login">
						<Text variant="inter-header-selectable">Login</Text>
					</NavLink>
				</div>
			</div>
		</div>
	);
}
