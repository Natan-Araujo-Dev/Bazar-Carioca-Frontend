import Cookies from "universal-cookie";
import type TokenDTO from "../models/DTOs/tokenDTO";

const cookies = new Cookies();

export function resetCookies() {
	const opts = { path: "/" };

	cookies.set("accessToken", "", opts);
	cookies.set("refreshToken", "", opts);
	cookies.set("expiration", "", opts);
	cookies.set("userName", "", opts);
	cookies.set("userId", "", opts);
}

export function getExpirationDate(): Date | undefined {
	return parseExpiration(getExpirationCookie());
}

function parseExpiration(exp: string | number | undefined): Date | undefined {
	if (exp === undefined || exp === null || exp === "") return undefined;

	const s = String(exp).trim();

	// tenta ISO/parecido
	const iso = Date.parse(s);
	if (!isNaN(iso)) return new Date(iso);

	// tenta número (segundos ou ms)
	const n = Number(s);
	if (!isNaN(n)) {
		// se for pequeno, trata como segundos; senão, milissegundos
		if (n > 0 && n < 1e12) return new Date(n * 1000);
		if (n > 0) return new Date(n);
	}

	return undefined;
}

export function getAccessTokenCookie() {
	return cookies.get("accessToken");
}

export function getRefreshTokenCookie() {
	return cookies.get("refreshToken");
}

export function getExpirationCookie() {
	return cookies.get("expiration");
}

export function setNewTokenCookie(token: TokenDTO) {
	const accessToken = token.accessToken ?? "";
	const refreshToken = token.refreshToken ?? "";
	const expiration = token.expiration ?? "";

	const opts: any = { path: "/" };

	const expDate = parseExpiration(expiration);
	if (expDate) opts.expires = expDate;

	// salva como string também (expiration) pra referência
	cookies.set("accessToken", accessToken, opts);
	cookies.set("refreshToken", refreshToken, opts);
	cookies.set("expiration", String(expiration), opts);
}

export function setUserIdCookie(id: string) {
	const opts: any = { path: "/" };

	const expiration = parseExpiration(getExpirationCookie());
	if (expiration) opts.expires = expiration;

	cookies.set("userId", id, opts);
}

export function getUserIdCookie() {
	return cookies.get("userId");
}

export function setUserNameCookie(userName: string) {
	const opts: any = { path: "/" };

	const expiration = parseExpiration(getExpirationCookie());
	if (expiration) opts.expires = expiration;

	cookies.set("userName", userName, opts);
}

export function getUserNameCookie() {
	return cookies.get("userName");
}
