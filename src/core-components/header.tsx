import { NavLink } from "react-router";
import CreateAccount from "../base-components/create-account";
import Login from "../base-components/login.tsx";
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
				<CreateAccount />

				<Login />
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

				<div className="flex flex-col justify-evenly h-full">
					<CreateAccount />

					<Login />
				</div>
			</div>

			<SearchBar variant="mobile" />
		</div>
	);
}
