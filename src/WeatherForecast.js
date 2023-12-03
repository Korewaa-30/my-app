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

	if (loaded) {
		return (
			<div className="weather-forecast">
				<div className="row">
					<div className="col-md-1 sm-none"></div>
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div
									className="col-2"
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
		let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
