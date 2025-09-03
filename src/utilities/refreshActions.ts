import { refresh } from "../api/endpointAuth";
import { useUserInfoContext } from "../contexts/userInfoContext";
import {
	getAccessTokenCookie,
	getRefreshTokenCookie,
	getUserIdCookie,
	getUserNameCookie,
	setUserIdCookie,
} from "../cookies/userCookie";
import type TokenModelDTO from "../models/DTOs/tokenModelDTO";

export default async function refreshActions() {
	const { setUserLogged, setUserId, setUserName } = useUserInfoContext();

	const token: TokenModelDTO = {
		accessToken: getAccessTokenCookie(),
		refreshToken: getRefreshTokenCookie(),
	};
	refresh(token);

	// setar:
	// context [ userLogged, userId, userName ]
	setUserLogged(true);
	setUserId(getUserIdCookie());
	setUserName(getUserNameCookie());
	// cookie [ userId, userName ]
	setUserIdCookie(getUserIdCookie());
	setUserName(getUserNameCookie());
}
