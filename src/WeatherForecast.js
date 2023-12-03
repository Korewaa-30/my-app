import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data.daily);
	}

	let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
	let longitude = props.coordinates.longitude;
	let latitude = props.coordinates.latitude;
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="weather-forecast">
			<div className="row">
				<div className="col-md-1 sm-none"></div>
				<div className="col-2">
					<div className="forecast-day">Mon</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
						alt="icon"
						width="60px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">30°</span>
						<span id="min-temp">25°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
