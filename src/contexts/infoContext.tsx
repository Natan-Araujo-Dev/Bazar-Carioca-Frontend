import type React from "react";
import { createContext, useContext, useState } from "react";

interface InfoContextProps {
	info: string;
	setInfo: (info: string) => void;
}

const InfoContext = createContext<InfoContextProps | undefined>(undefined);

export function InfoProvider({ children }: { children: React.ReactNode }) {
	const [info, setInfo] = useState("Inspecionando");

	return (
		<InfoContext.Provider value={{ info: info, setInfo: setInfo }}>
			{children}
		</InfoContext.Provider>
	);
}

export function useInfoContext() {
	const ctx = useContext(InfoContext);
	if (!ctx)
		throw new Error("useInfoContext must be used within SearchProvider");
	return ctx;
}
