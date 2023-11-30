import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Weather-App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="container">
			<App defaultCity="Accra" />
			<br />
			<p className="hub">
				This project was coded by Sarah Duker, and is{" "}
				<a
					href="https://github.com/Korewaa-30/my-weather-app"
					target="_blank"
					rel="noreferrer"
				>
					open-sourced
				</a>{" "}
				and{" "}
				<a
					href="https://my-weather-app-green.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					hosted on Vercel
				</a>
			</p>
		</div>
	</React.StrictMode>
);
reportWebVitals();
