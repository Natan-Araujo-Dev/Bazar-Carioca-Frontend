import { Outlet } from "react-router";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import Context from "../core-components/info-subheader";

export default function LayoutInspect() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<Context />

			<main className="flex flex-1 mx-4 justify-center items-center py-15">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
