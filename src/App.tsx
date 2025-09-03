import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { refresh } from "./api/endpointAuth";
import { useUserInfoContext } from "./contexts/userInfoContext";
import {
	getAccessTokenCookie,
	getExpirationDate,
	getRefreshTokenCookie,
	getUserIdCookie,
	getUserNameCookie,
} from "./cookies/userCookie";
import type TokenModelDTO from "./models/DTOs/tokenModelDTO";
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

		if (delay > 0) {
			const timeout = setTimeout(() => {
				const token: TokenModelDTO = {
					accessToken: getAccessTokenCookie(),
					refreshToken: getRefreshTokenCookie(),
				};
				refresh(token).then(() => {
					setRefreshTrigger((v) => v + 1);
				});
			}, delay);
			return () => clearTimeout(timeout);
		} else {
			console.log(`Token próximo/expirado após ${refreshTrigger} refreshs`);
			const token: TokenModelDTO = {
				accessToken: getAccessTokenCookie(),
				refreshToken: getRefreshTokenCookie(),
			};
			refresh(token).then(() => {
				setRefreshTrigger((v) => v + 1);
			});
		}
	}, [userLogged, refreshTrigger]);

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
