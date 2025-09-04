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
	const {
		userLogged,
		userId,
		userName,
		setUserLogged,
		setUserId,
		setUserName,
	} = useUserInfoContext();

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

	console.log("Context");
	console.log("UserLogged: " + userLogged);
	console.log("UserId: " + userId);
	console.log("UserName: " + userName);

	console.log("Cookie");
	console.log("UserId: " + getUserIdCookie());
	console.log("UserName: " + getUserNameCookie());
}
