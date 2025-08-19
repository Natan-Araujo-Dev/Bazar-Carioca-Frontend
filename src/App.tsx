import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PageCreate from "./pages/page-create";
import PageLogin from "./pages/page-login";
import PageStore from "./pages/page-store";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/componentes" element={<PageComponents />} />
					<Route path="/criar" element={<PageCreate />} />
					<Route path="/login" element={<PageLogin />} />
					<Route path="/lojas/:id" element={<PageStore />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
