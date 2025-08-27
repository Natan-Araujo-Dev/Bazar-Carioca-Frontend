import axios from "axios";

const api = axios.create({
	// backend local
	// baseURL: "http://localhost:5000/bazar-carioca",

	// backend online:
	baseURL: "http://15.228.192.242:5000/Bazar-Carioca",

	// backend pelo vercel
	// baseURL: "/api/Bazar-Carioca",

	headers: { "Content-Type": "application/json" },
	timeout: 10_000,
});

export default api;
