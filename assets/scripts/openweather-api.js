        // OpenWeather API - Current Weather ------------------- API documentation @ https://openweathermap.org/current
        // OpenWeather API - Inputs
        var appidInput = "54a9099a651206645d31affb6bbd4e54"; // API key
        var qInput = ""; // city name | Ex: ["Atlanta", "Telluride", "New York City", "Nashville"]
        var zipInput = ""; // zip code | Ex: [30188, 94040, 72201, 80239]

        // OpenWeather API - Conditions
        var appid = "&appid=" + appidInput;
        var weather = "weather";
        var forecast = "forecast";
        var q = "?q=" + qInput;
        var zip = "?zip=" + zipInput;

        // OpenWeather API - Queries: Do Not Modify
        var queryUrl = "https://api.openweathermap.org/data/2.5/";
        var queryUrl_weather = queryUrl.concat(weather);
        var queryUrl_forecast = queryUrl.concat(forecast);

        // OpenWeather API - Queries: Available for Use
        var queryUrl_currentWeatherAtCity = queryUrl_weather.concat(q).concat(appid); // Get current weather by city name
        var queryUrl_currentWeatherAtZIP = queryUrl_weather.concat(zip).concat(appid); // Get current weather by zip code
        var queryUrl_forecastWeatherAtCity = queryUrl_forecast.concat(q).concat(appid); // Get forecasted weather by city
        var queryUrl_forecastWeatherAtZIP = queryUrl_forecast.concat(zip).concat(appid); // Get forecasted weather by zip

        // OpenWeather API - Calls
        $.ajax({
            url: queryUrl_currentWeatherAtZIP,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
        });