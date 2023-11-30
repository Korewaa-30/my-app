import React from "react";

export default function FormatDate() {
	let current = new Date();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[current.getDay()];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let month = months[current.getMonth()];
	let date = current.getDate();
	let year = current.getFullYear();
	let hours = current.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}

	let minutes = current.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<div>
			{day}, {month} {date} {year}, {hours}:{minutes}
		</div>
	);
}
