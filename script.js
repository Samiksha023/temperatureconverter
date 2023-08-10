function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusOutput = document.getElementById("result");
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    celsiusOutput.textContent = `Result: ${celsius.toFixed(2)}°C`;
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("result");
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitOutput.textContent = `Result: ${fahrenheit.toFixed(2)}°F`;
}
