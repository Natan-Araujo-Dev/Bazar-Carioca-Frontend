import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "./contexts/SearchContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<SearchProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</SearchProvider>,
);
