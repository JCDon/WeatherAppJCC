//TODO: user can search for destinations

    //TODO: create input to collect user destination choice
    
    var click = $(".clicked")
    var searchBtn = $("#button-addon2")
    var cityName = ""
    var cityTemp = ""
    var cityHumidity = ""
    var cityWind = ""
    var cityUV = ""
    var cityWind = ""
    var cityLat = ""
    var cityLon = ""
    var theDate = $(this)
    console.log(this)
    var ul = $("#buttonList")

function getCity(){
    var apiKey = "cf0d6b6905a8a68d8baa46fc6d205c20"
    var userInput = $("#inputField").val()
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        cityName = response.name
        cityHumidity = response.main.humidity
        cityWind = response.wind.speed
        cityTemp = response.main.temp
        cityLat = response.coord.lat
        cityLon = response.coord.lon
        
        var queryURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            cityUV = response.value
            console.log(cityUV)
            updatePrimaryCard();
        });
        
    });

}

function createBtn(){
    var userInput = $("#inputField").val()
    var newCityBtn = $("<button>")
    newCityBtn.text(userInput)
    var li = $("<li>")
    newCityBtn.attr("class", "btn btn-lg bg-success")
    newCityBtn.attr("type", "button")
    li.append(newCityBtn)
    ul.append(li)
}

function updatePrimaryCard(){
    var cardTitle = $("#cityND")
    var temp =$("#temp")
    var humid =$("#humid")
    var wind =$("#wind")
    var uv =$("#uv")
    cardTitle.text(`${cityName},   ${moment().format("h:mm a")} `)
    temp.text(`Temp: ${cityTemp}`)
    humid.text(`Humidity: ${cityHumidity}`)
    wind.text(`Wind Speed: ${cityWind}`)
    uv.text(cityUV)

    if (cityUV > 8) {
        uv.attr("class", "deadly")
    } else if (cityUV > 6) {
        uv.attr("class", "danger")
    } else if (cityUV > 3) {
        uv.attr("class", "risky")
    } else if (cityUV > 0) {
        uv.attr("class", "safe")
    }
    
}





searchBtn.on("click", function(){
    getCity();
    createBtn();
})

    

//TODO: user can view the results from the same page

    //TODO: create cards for each result

        //TODO: cards must be updatable by selcting other options

    //TODO: save previous searches

        //TODO: the buttons must be populated once the start button is clicked

        //TODO: save the user results as local storage
    
    //TODO: load a few suggestions

        //TODO: create some auto-populating options on page load

//TODO: display requirements:

    //done contains the header bar across the top of the page with the title
    
    //TODO: a search input in the top left

        //TODO: has a button

        //TODO: uses a submit input for pressing enter

    //TODO: a list of buttons below the search bar

    //TODO: displayed card to the right of the page

        //TODO: City Name, Date, weather icon

            //  temp: F
            //  humidity: %
            //  wind speed: mph
            //  uv index: color change based on danger

    //TODO: a five day forecast of the weather in that area
        
        // Date
    
        // icons for weather

        // temp: F

        // humidity: %


