import React from "react";

export default function ForecastDay(props) {
	function maxTemp() {
		let temperature = Math.round(props.data.daily.temperature.maximum);
		return `${temperature}°`;
	}

	function minTemp() {
		let temperature = Math.round(props.data.daily.temperature.minimum);
		return `${temperature}°`;
	}

	function day() {
		let date = new Date();
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div>
			<div className="Forecast-day">{day()}</div>
			<img
				src={props.daily.condition.icon}
				alt="icon"
				width="60px"
			/>
			<div className="Forecast-temperatures">
				<span className="Maximum-temperature">{maxTemp()}</span>
				<span className="Minimum-temperature">{minTemp()}</span>
			</div>
		</div>
	);
}
