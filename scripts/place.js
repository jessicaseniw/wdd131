// ================= FOOTER DATES =================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ================= STATIC WEATHER VALUES =================
const temperature = 8;   // °C
const windSpeed = 12;    // km/h

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;

// ================= WIND CHILL FUNCTION =================
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

// ================= WIND CHILL LOGIC =================
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
}

document.getElementById("chill").textContent = windChill;
