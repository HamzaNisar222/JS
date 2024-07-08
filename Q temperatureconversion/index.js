const tempInput = document.getElementById("temperature");
const tofarenhite = document.getElementById("tofarenhite");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
const btn = document.getElementById("myBtn");

btn.onclick = function convert(event) {
    event.preventDefault();

    let temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        result.textContent = `Please enter a valid temperature.`;
        return;
    }

    if (tofarenhite.checked) {
        let convertedTemp = temp * 9 / 5 + 32;
        result.textContent = `Your temperature in Fahrenheit is ${convertedTemp.toFixed(1)}°F`;
    } else if (tocelsius.checked) {
        let convertedTemp = (temp - 32) * 5 / 9;
        result.textContent = `Your temperature in Celsius is ${convertedTemp.toFixed(1)}°C`;
    } else {
        result.textContent = `Select a valid unit`;
    }
}
