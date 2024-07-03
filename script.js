
// Get current time in UTC
setInterval(() => {
	const currentTime = new Date().toUTCString();
	document.getElementById("currentTime").innerHTML = currentTime;
}, 1000);
	
// Get current day of the week
const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });
document.getElementById("currentDay").innerHTML = currentDay;
