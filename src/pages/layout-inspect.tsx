import { Outlet } from "react-router";
import { SearchProvider } from "../contexts/SearchContext";
import Context from "../core-components/context";
import Footer from "../core-components/footer";
import Header from "../core-components/header";

export default function LayoutInspect() {
	return (
		<SearchProvider>
			<div className="flex flex-col min-h-screen">
				<Header />

				<Context />

			<main className="flex flex-1 mx-4 items-center justify-center py-15">
				<Outlet />
			</main>
				<main className="flex flex-1 mx-4 items-center justify-center py-15">
					<Outlet />
				</main>

				<Footer />
			</div>
		</SearchProvider>
	);
}
