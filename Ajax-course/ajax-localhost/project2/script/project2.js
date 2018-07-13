function init() {

    var errorMessage = document.getElementById('errorMessage');

    if ( errorMessage ) {
        errorMessage.parentNode.removeChild(errorMessage);
    }


    var submitBtn = document.getElementById('submit');

    submitBtn.onclick = displayWeatherResult;

}


function displayWeatherResult() {

    var errorMessage = document.getElementById('errorMessage');

    if ( errorMessage ) {
        errorMessage.parentNode.removeChild(errorMessage);
    }

    $('hr').remove();
    $('#cityOutputContainer').remove();
    $('#temperatureContainer').remove();


    var numericRegex = /^[0-9]+$/;
    var userZipcode = document.getElementById('zipcodeInput').value;


    if ( userZipcode.length == 0 && userZipcode == '' || !userZipcode.match(numericRegex)) {

        var userInputContainer = document.getElementById('userInputContainer');
        var message = document.createTextNode('* Please enter zip code (has to be a number).)');
        var span = document.createElement('span');
        span.id = 'errorMessage';
        span.appendChild(message);
        userInputContainer.appendChild(span);

        $('#errorMessage').css({'color': 'red'});


    } else {

        runPostalCodeSearch(userZipcode);

    }

}


function runPostalCodeSearch(userZipcode) {

    var xhr = new XMLHttpRequest();

    var url = 'http://api.geonames.org/postalCodeSearchJSON';
    var parameters = '?formatted=true&postalcode=' + userZipcode +'&maxRows=1&username=ponomarova&style=full';

    xhr.open('GET', url + parameters);


    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {

            var result = JSON.parse(xhr.responseText);
            var placeName = result.postalCodes[0].placeName;
            var latitude = result.postalCodes[0].lat;
            var longitude = result.postalCodes[0].lng;

            //display city
            var project2Container = document.getElementById('project2Container');
            var div = document.createElement('div');
            var hr = document.createElement('hr');
            var h2 = document.createElement('h2');
            var city = document.createTextNode(placeName);
            div.id = 'cityOutputContainer';
            h2.appendChild(city);
            div.appendChild(hr);

            div.appendChild(h2);
            project2Container.appendChild(div);


            runWeatherConditionRequest(latitude, longitude);
        }
    }

    xhr.send(null);
    
}


function runWeatherConditionRequest(latitude, longitude) {


    var xhr = new XMLHttpRequest();
    var url = 'http://api.geonames.org/findNearByWeatherJSON';
    var parameters = '?formatted=true&lat=' + latitude + '&lng=' + longitude + '&username=ponomarova&style=full';


    xhr.open('GET', url + parameters);

    xhr.onreadystatechange = function () {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {

            var result = JSON.parse(xhr.responseText);
            var windSpeedString = result.weatherObservation.windSpeed;
            var temperatureString = result.weatherObservation.temperature;
            var temperatureCelsius = parseInt(temperatureString);
            var windSpeed = parseInt(windSpeedString);


            var temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
            var temperatureOutput = Math.round(temperatureFahrenheit);

            //output wind and speed
            var project2Container = document.getElementById('project2Container');
            var div = document.createElement('div');
            div.id = 'temperatureContainer';
            var h3Temperature = document.createElement('h3');
            h3Temperature.id = 'h3Temperature';
            var h3Wind = document.createElement('h3');
            h3Wind.id = 'h3Wind';
            var temperature = document.createTextNode(temperatureOutput + '\u00B0 Fahrenheit');
            var wind = document.createTextNode(windSpeed + ' mph Wind');


            h3Temperature.appendChild(temperature);
            h3Wind.appendChild(wind);
            div.appendChild(h3Temperature);
            div.appendChild(h3Wind);
            project2Container.appendChild(div);


            if ( temperatureOutput >= 83 ) {

                var span = document.createElement('span');
                span.id = 'hotTemperatureImg';
                h3Temperature.appendChild(span);

                $('#hotTemperatureImg').html('<i id="sunImg" class="fa">&#xf185;</i>');


            } else if ( temperatureOutput <= 34 ) {

                var span = document.createElement('span');
                span.id = 'coldTemperatureImg';
                h3Temperature.appendChild(span);

                $('#coldTemperatureImg').html('<i id="coldImg" class="fa fa-thermometer-empty"></i>');

            }

            if ( windSpeed > 15 ) {

                var div = document.createElement('div');
                div.id = 'imageBox';
                var temperatureContainer = document.getElementById('temperatureContainer');
                temperatureContainer.appendChild(div);
                $(div).html('<img src="images/wind2.png" />');

            }

        }

    }

    xhr.send(null);

}

