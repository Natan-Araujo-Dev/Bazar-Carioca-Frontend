import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutInspect from "./pages/layout-inspect";
import LayoutMain from "./pages/layout-main";
import PageCreate from "./pages/page-create";
import PageHome from "./pages/page-home";
import PageLogin from "./pages/page-login";
import PageProduct from "./pages/page-product";
import PageStore from "./pages/page-store";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
				</Route>

				<Route element={<LayoutInspect />}>
					<Route path="/criar" element={<PageCreate />} />

					<Route path="/login" element={<PageLogin />} />

					<Route path="/lojas/:id" element={<PageStore />} />

					<Route path="/produtos/:id" element={<PageProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
