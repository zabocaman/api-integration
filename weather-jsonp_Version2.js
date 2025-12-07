function showWeather(data) {
    if (!data || !data.main) {
        document.getElementById('weather').innerHTML = 'Failed to load weather data.';
        return;
    }
    const name = data.name;
    const temp = data.main.temp;
    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    document.getElementById('weather').innerHTML = `
        <b>City:</b> ${name}<br>
        <b>Temperature:</b> ${temp}&deg;C<br>
        <b>Description:</b> ${desc}<br>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
    `;
}

// build JSONP URL
const url = "http://api.openweathermap.org/data/2.5/weather" +
  "?q=Toronto,ca" +
  "&appid=69cd1126e263e700b1254e478aaa52af" +
  "&units=metric" +
  "&callback=showWeather";

// inject script tag
const script = document.createElement('script');
script.src = url;
document.body.appendChild(script);