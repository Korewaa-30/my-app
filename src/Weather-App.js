import React, { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

export default function App(props) {
	let [city, changeCity] = useState(props.defaultCity);
	let [weatherData, changeWeatherData] = useState({ refreshed: false });

	function currentWeather(response) {
		changeWeatherData({
			refreshed: true,
			city: response.data.city,
			country: response.data.country,
			coordinates: response.data.coordinates,
			temperature: response.data.temperature.current,
			wind: response.data.wind.speed,
			humidity: response.data.temperature.humidity,
			icon: response.data.condition.icon_url,
			description: response.data.condition.description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function updateCity(event) {
		changeCity(event.target.value);
	}

	function search() {
		let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(currentWeather);
	}

	function getCurrentWeather(latitude, longitude) {
		let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
		let currentUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

		axios.get(currentUrl).then(currentWeather);
	}

	function getCity(event) {
		event.preventDefault();

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;

				getCurrentWeather(latitude, longitude);
			});
		} else {
			alert("Geolocation is not supported by your browser.");
		}
	}

	let hours = new Date().getHours();
	let isDaytime = hours >= 6 && hours < 18;

	let containerStyle = {
		backgroundImage: isDaytime
			? 'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/099/125/original/cloud-blue-sky.jpg?1696527919")'
			: 'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/010/original/night-backfround.jpeg?1698325108")',
		color: isDaytime ? "black" : "white",
	};

	let headerStyle = {
		background: isDaytime ? "#47A8E5" : "#020023",
		color: isDaytime ? "black" : "white",
	};

	if (weatherData.refreshed) {
		return (
			<div>
				<h1 style={headerStyle}>Weather Dashboard</h1>
				<div
					className="App shadow"
					style={containerStyle}
				>
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-md-8">
								<input
									type="search"
									placeholder="Enter your city..."
									className="form-control mb-2"
									autoFocus="on"
									onChange={updateCity}
								/>
							</div>
							<div className="col-md-4">
								<input
									type="submit"
									value="Search"
									className="btn btn-primary"
								/>
							</div>
						</div>
						<br />
						<div className="separator"></div>
						<div className="row">
							<div className="col-md-8">
								<button
									className="btn btn-info"
									onClick={getCity}
								>
									Use your current location
								</button>
							</div>
						</div>
					</form>
					<br />
					<WeatherInfo data={weatherData} />
					<h3>Next 5 Days</h3>
					<WeatherForecast coordinates={weatherData.coordinates} />
				</div>
			</div>
		);
	} else {
		search();
		return (
			<ReactLoading
				type={"bubbles"}
				color={"#ffffff"}
				height={"20%"}
				width={"20%"}
			/>
		);
	}
}
