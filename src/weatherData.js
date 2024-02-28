export async function getCondition(location, days) {
    try {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab2b5b68cc3a4b2cb63100729241902&q=${location}&days=${days}`);
        const jsonWeather = await weatherData.json();
        return  jsonWeather.forecast.forecastday;
    }
    catch(error) {
        console.log(error);
        alert("Error: Check Spelling / Retry Prompt");
    }
}

export async function getTemp(location, days) {
    try {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab2b5b68cc3a4b2cb63100729241902&q=${location}&days=${days}`);
        const jsonWeather = await weatherData.json();
        return  jsonWeather.forecast.forecastday;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getRainChance(location, days) {
    try {
        const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab2b5b68cc3a4b2cb63100729241902&q=${location}&days=${days}`);
        const jsonWeather = await weatherData.json();
        return  jsonWeather.forecast.forecastday;
    }
    catch(error) {
        console.log(error);
    }
}