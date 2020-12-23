# WeatherAppJCC

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Screenshot

![Screenshot](WeatherApp.png)

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

## Psuedo-Code

// User needs to get weather

    // user can search city

        // there is an input option on the page

    // user can view current weather data

        // there is an active card displaying temp, humidity, wind, and the uv index

    // user can view the forecast

        // there is a semi functional display of the weekdays monday-friday

    // user can see past search options

        // buttons exist displaying the past searches

        // more buttons can be added by searching a city