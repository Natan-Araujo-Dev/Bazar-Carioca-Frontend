import { Outlet } from "react-router";
import Context from "../core-components/infoSubheader";
import Footer from "../core-components/footer";
import Header from "../core-components/header";

export default function LayoutInspect() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<Context />

			<main className="flex flex-1 mx-4 items-center justify-center py-15">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
