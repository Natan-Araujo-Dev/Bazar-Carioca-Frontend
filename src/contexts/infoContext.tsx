import type React from "react";
import { createContext, useContext, useState } from "react";

interface InfoContextType {
	info: string;
	setInfo: (info: string) => void;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

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
		throw new Error("useSearchContext must be used within SearchProvider");
	return ctx;
}
