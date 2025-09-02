import type React from "react";
import { createContext, useContext, useState } from "react";

interface userInfoContextProps {
	userLogged: boolean;
	setUserLogged: (userLogged: boolean) => void;

	userId: string;
	setUserId: (userId: string) => void;

	userName: string;
	setUserName: (userName: string) => void;
}

const UserInfoContext = createContext<userInfoContextProps | undefined>(
	undefined,
);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
	const [userLogged, setUserLogged] = useState(false);
	const [userId, setUserId] = useState("");
	const [userName, setUserName] = useState("");

	return (
		<UserInfoContext.Provider
			value={{
				userLogged: userLogged,
				setUserLogged: setUserLogged,

				userId: userId,
				setUserId: setUserId,

				userName: userName,
				setUserName: setUserName,
			}}
		>
			{children}
		</UserInfoContext.Provider>
	);
}

export function useUserInfoContext() {
	const ctx = useContext(UserInfoContext);
	if (!ctx)
		throw new Error("useUserInfoContext must be used within UserInfoProvider");
	return ctx;
}
