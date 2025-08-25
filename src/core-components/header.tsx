import { NavLink } from "react-router";
import Text from "../base-components/text";
import SearchBar from "./search-bar";

export default function Header() {
	const windowWidth = window.innerWidth;

	if (windowWidth < 720) {
		return <MobileHeader />;
	}
	return <DesktopHeader />;
}

function DesktopHeader() {
	return (
		<div
			className="
			w-full
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

			<SearchBar variant="desktop" />

			<div className="flex space-x-10">
				<div>
					<NavLink to="/criar" className="flex h-full w-20 items-center">
						<Text variant="inter-header-selectable">Criar conta</Text>
					</NavLink>
				</div>

				<div>
					<NavLink to="/login" className="flex h-full w-20 items-center">
						<Text variant="inter-header-selectable">Fazer login</Text>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

function MobileHeader() {
	return (
		<div className="bg-blue-medium flex flex-col items-center">
			<div
				className="
				w-1/1
				h-20
				flex
				justify-between
				items-center
				"
			>
				<div className="m-3">
					<NavLink to="/">
						<Text variant="zilla-lg">
							Bazar <br /> Carioca.com
						</Text>
					</NavLink>
				</div>

				<div className="flex space-x-15 mr-5">
					<div>
						<NavLink to="/criar">
							<Text variant="inter-header-selectable">Criar conta</Text>
						</NavLink>
					</div>

					<div>
						<NavLink to="/login">
							<Text variant="inter-header-selectable">Fazer login</Text>
						</NavLink>
					</div>
				</div>
			</div>

			<SearchBar variant="mobile" />
		</div>
	);
}
