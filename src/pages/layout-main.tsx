import { NavLink, Outlet } from "react-router";
import Text from "../base-components/text";
import Header from "../core-components/header";
import Footer from "../core-components/footer";

export default function LayoutMain() {
	return (
		<div className="flex flex-col min-h-screen gap-20">
			<Header />

			<main className="flex flex-1 items-center justify-center">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
