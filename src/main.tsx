import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SearchProvider } from "./contexts/SearchContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SearchProvider>
			<App />
		</SearchProvider>
	</StrictMode>,
);
