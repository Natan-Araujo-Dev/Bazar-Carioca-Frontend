import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUserInfoContext } from "./contexts/userInfoContext";
import {
	getAccessTokenCookie,
	getExpirationDate,
	getUserIdCookie,
	getUserNameCookie,
} from "./cookies/userCookie";
import LayoutInspect from "./pages/layout-inspect";
import LayoutMain from "./pages/layout-main";
import PageCreateAccount from "./pages/page-create-account";
import PageCreateProductType from "./pages/page-create-product-type";
import PageCreateService from "./pages/page-create-service";
import PageCreateStore from "./pages/page-create-store";
import PageHome from "./pages/page-home";
import PageLogin from "./pages/page-login";
import PageProduct from "./pages/page-product";
import PageShopkeeperStores from "./pages/page-shopkeeper-stores";
import PageStore from "./pages/page-store";
import refreshActions from "./utilities/refreshActions";
import PageCreateProduct from "./pages/page-create-product";

export default function App() {
	const { userLogged, setUserLogged, setUserId, setUserName } =
		useUserInfoContext();

	if (getAccessTokenCookie()) {
		setUserLogged(true);
	} else {
		setUserLogged(false);
	}
	setUserId(getUserIdCookie());
	setUserName(getUserNameCookie());

	const [refreshTrigger, setRefreshTrigger] = useState(0);

	useEffect(() => {
		if (userLogged === false) {
			return;
		}

		const expDate = getExpirationDate();
		if (!expDate) return;

		const tokenExpiration = expDate.getTime();
		const agora = Date.now();

		const triggerTime = tokenExpiration - 5 * 60 * 1000;
		const delay = triggerTime - agora;

		console.log(delay);
		console.log(tokenExpiration);
		console.log(refreshTrigger);

		if (delay > 0) {
			const timeout = setTimeout(() => {
				refreshActions().then(() => {
					setRefreshTrigger((v) => v + 1);
				});
			}, delay);
			return () => clearTimeout(timeout);
		} else {
			refreshActions().then(() => {
				setRefreshTrigger((v) => v + 1);
			});
		}

		console.log(delay);
		console.log(tokenExpiration);
		console.log(refreshTrigger);
	}, [refreshTrigger, userLogged]);

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

					<Route
						path="/lojas/:id/criar/servico"
						element={<PageCreateService />}
					/>

					<Route
						path="/lojas/:id/criar/tipo-de-produto"
						element={<PageCreateProductType />}
					/>

					<Route
						path="/tipo-de-produto/:id/criar"
						element={<PageCreateProduct />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
