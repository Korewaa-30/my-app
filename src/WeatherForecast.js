import React from "react";

export default function WeatherForecast() {
	return (
		<div className="weather-forecast">
			<div className="row">
				<div className="col-md-1 sm-none"></div>
				<div className="col-2">
					<div className="forecast-day">Mon</div>
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
			</div>
		</div>
	);
}
