const icon = document.getElementById('weather-img');
const currentTemp = document.querySelector('#current-temp');
const descriptionTemp = document.querySelector('#description-temp');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidityTemp = document.querySelector('#humidity-temp');
const sunriseTemp = document.querySelector('#sunrise-temp');
const sunsetTemp = document.querySelector('#sunset-temp');

const mykey = 'e7b2a5f6573f039c65783c60c1b47ddc'
const mylat = '13.7'
const mylog = '-89.22'
const URL = `//api.openweathermap.org/data/2.5/weather?lat=${mylat}5&lon=${mylog}&units=imperial&appid=${mykey}`

async function apiFetch() {
    try {
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            console.log(data) //testing 
            displayResult(data);
        }

    } catch (error) {
        console.log(error)
    }
}

apiFetch();

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].icon;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    descriptionTemp.innerHTML = `${data.weather[0].description}`;
    highTemp.innerHTML = `${data.main.temp_max}`;
    lowTemp.innerHTML = `${data.main.temp_min}`;
    humidityTemp.innerHTML = `${data.main.humidity}`;
    // Change the time format
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('es-SV', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('es-SV', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    sunriseTemp.innerHTML = `${sunriseTime}`;
    sunsetTemp.innerHTML = `${sunsetTime}`;

    console.log('Hello')
}
