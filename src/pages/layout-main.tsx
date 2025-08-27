import { Outlet } from "react-router";
import Footer from "../core-components/footer";
import Header from "../core-components/header";

export default function LayoutMain() {
	return (
		<div className="flex flex-col min-h-screen gap-20">
			<Header />

			<main className="flex flex-1 mx-4 items-center justify-center">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
