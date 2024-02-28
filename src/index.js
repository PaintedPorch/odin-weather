import "./css/meyerReset.css";
import "./css/style.css";
import { getGiphy } from "./weatherGiphy";
import { getCondition, getTemp, getRainChance } from "./weatherData";
import { clearPrompt } from "./clearPrompt";

const dayOneImg = document.querySelector(".today");
const dayTwoImg = document.querySelector(".tomorrow");
const dayThreeImg = document.querySelector(".afterTomorrow");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

const conditionFields = document.querySelectorAll(".condition");
const tempFields = document.querySelectorAll(".temp");
const rainFields = document.querySelectorAll(".rainChance");

let dayTempList = [];

const textField = document.getElementById("searchBar");
textField.onchange = async() => {
    try { 
        let value = textField.value;

        const conditions = await getCondition(value, 3);
        const temperatures = await getTemp(value, 3);
        const rainDays = await getRainChance(value, 3);

        // conditions[i].textContent = `Condition: ${dayOneCondition}`;
        const giphyUrlList = [];

        for (let i = 0; i < tempFields.length; i++) {
            conditionFields[i].textContent = `Condition: ${conditions[i].day.condition.text}`;
            tempFields[i].textContent = `Avg Temp: ${temperatures[i].day["avgtemp_c"]}°C`;
            rainFields[i].textContent = `Chance Of Rain: ${rainDays[i].day["daily_chance_of_rain"]}%`;
            giphyUrlList.push(await getGiphy(conditions[i].day.condition.text));
            dayTempList.push(temperatures[i].day["avgtemp_c"]);
        }

        dayOneImg.style.backgroundImage = `url(${giphyUrlList[0]})`;
        dayTwoImg.style.backgroundImage = `url(${giphyUrlList[1]})`;
        dayThreeImg.style.backgroundImage = `url(${giphyUrlList[2]})`;

        clearPrompt(textField); 
    } catch(error) {
        console.log(error);
    }
};
celsius.onchange = async() => {
    for (let i = 0; i < tempFields.length; i++) {
        tempFields[i].textContent = `Avg Temp: ${dayTempList[i]}°C`;
    }
};
fahrenheit.onchange = async() => {
    for (let i = 0; i < tempFields.length; i++) {
        tempFields[i].textContent = `Avg Temp: ${Math.round((dayTempList[i] * (9/5)) + 32)}°F`;
    }
};
