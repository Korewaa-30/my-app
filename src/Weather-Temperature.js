import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default function WeatherTemperature(props) {
	let [unit, changeUnit] = useState("celsius");
	function showFahrenheit(event) {
		event.preventDefault();
		changeUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		changeUnit("celsius");
	}

	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}

	if (unit === "celsius") {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(props.celsius)}</span>
				<span className="unit">
					°C |
					<a
						href="/"
						id="fahrenheit-link"
						className="text-decoration-none text-reset"
						onClick={showFahrenheit}
					>
						{" "}
						°F{" "}
					</a>
				</span>
			</div>
		);
	} else {
		return (
			<div className="WeatherTemperature">
				<span className="temperature">{Math.round(fahrenheit())}</span>
				<span className="unit">
					{" "}
					<a
						href="/"
						id="celsius-link"
						onClick={showCelsius}
					>
						{" "}
						°C | °F{" "}
					</a>
				</span>
			</div>
		);
	}
}
