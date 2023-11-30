import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
	let [loaded, changeLoaded] = useState(false);
	let [forecast, changeForecast] = useState(null);

	useEffect(() => {
		changeLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		changeForecast(response.data.daily);
		changeLoaded(true);
	}

	function load() {
		let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div
									className="col"
									key={index}
								>
									<ForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();

		return (
			<div className="row weather-forecast">
				<div className="col-md-1 sm-none"></div>
				<div className="col-2">
					<div className="forecast-day">Day 1</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
						alt="icon"
						width="70px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">30°</span>
						<span id="min-temp">25°</span>
					</div>
				</div>
				<div className="col-2">
					<div className="forecast-day">Day 2</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
						alt="icon"
						width="70px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">30°</span>
						<span id="min-temp">26°</span>
					</div>
				</div>
				<div className="col-2">
					<div className="forecast-day">Day 3</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
						alt="icon"
						width="70px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">29°</span>
						<span id="min-temp">26°</span>
					</div>
				</div>
				<div className="col-2">
					<div className="forecast-day">Day 4</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
						alt="icon"
						width="70px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">30°</span>
						<span id="min-temp">25°</span>
					</div>
				</div>
				<div className="col-2">
					<div className="forecast-day">Day 5</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
						alt="icon"
						width="70px"
						id="forecast-icon"
					/>
					<div id="forecast-temp">
						<span id="max-temp">29°</span>
						<span id="min-temp">25°</span>
					</div>
				</div>
			</div>
		);
	}
}
