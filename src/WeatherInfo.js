import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./Weather-Temperature";

export default function WeatherInfo(props) {
	return (
		<div className="AppInfo">
			<div className="current">
				<h2 className="current-location">
					{props.data.city}, {props.data.country}
				</h2>
				<FormatDate />
				<div className="description text-capitalize">
					{props.data.description}
				</div>
			</div>
			<div className="row weather-today">
				<div className="col-md-6">
					<div class="d-flex weather-temperature">
						<img
							src={props.data.icon}
							alt="icon"
							width="80px"
							id="current-icon"
						/>
						<span className="temp-today">
							<WeatherTemperature celsius={props.data.temperature} />
						</span>
					</div>
				</div>
				<div className="col-md-6">
					<div className="humidity">
						<img
							src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/363/original/icons8-humidity-32.png?1698661745"
							alt=""
							width="20px"
						/>
						Humidity:{" "}
						<span className="humidity-value">{props.data.humidity}</span>
						<span>%</span>
					</div>
					<div className="wind">
						<img
							src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/364/original/icons8-wind-64.png?1698661902"
							alt=""
							width="20px"
						/>
						Wind: <span className="wind-value">{props.data.wind}</span>
						<span>m/s</span>
					</div>
				</div>
			</div>
		</div>
	);
}
