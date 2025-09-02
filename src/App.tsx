import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUserInfoContext } from "./contexts/userInfoContext";
import {
	getAccessTokenCookie,
	getUserIdCookie,
	getUserNameCookie,
} from "./cookies/userCookie";
import LayoutInspect from "./pages/layout-inspect";
import LayoutMain from "./pages/layout-main";
import PageCreateAccount from "./pages/page-create-account";
import PageCreateStore from "./pages/page-create-store";
import PageHome from "./pages/page-home";
import PageLogin from "./pages/page-login";
import PageProduct from "./pages/page-product";
import PageShopkeeperStores from "./pages/page-shopkeeper-stores";
import PageStore from "./pages/page-store";

export default function App() {
	const { setUserLogged, setUserId, setUserName } = useUserInfoContext();

	if (getAccessTokenCookie()) {
		setUserLogged(true);
	} else {
		setUserLogged(false);
	}
	setUserId(getUserIdCookie());
	setUserName(getUserNameCookie());

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
				</Route>

				<Route element={<LayoutInspect />}>
					<Route path="/criar" element={<PageCreateAccount />} />

					<Route path="/login" element={<PageLogin />} />

					<Route path="/lojas/:id" element={<PageStore />} />

					<Route path="/produtos/:id" element={<PageProduct />} />

					<Route path="/lojas/lojista/:id" element={<PageShopkeeperStores />} />

					<Route path="/lojas/criar" element={<PageCreateStore />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
