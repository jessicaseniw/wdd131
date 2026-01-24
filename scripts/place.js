// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = Number(document.getElementById("temp").textContent);
const wind = Number(document.getElementById("wind").textContent);
let chill = "N/A";

if (temp <= 10 && wind > 4.8) {
    chill = (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

document.getElementById("chill").textContent = chill;
