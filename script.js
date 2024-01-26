var currentUnit = 'celsius';

function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var convertedTemperature;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    temperatureInput = parseFloat(temperatureInput);

    if (currentUnit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * (5/9);
        resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °C";
    } else if (currentUnit === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °F";
    }
}

function changeUnit() {
    currentUnit = (currentUnit === 'celsius') ? 'fahrenheit' : 'celsius';
    document.getElementById("unit").innerText = (currentUnit === 'celsius' ? '°C' : '°F');
    document.getElementById("result").innerHTML = "";
}

function resetConverter() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").innerText = '°C';
    document.getElementById("result").innerHTML = "";
}
