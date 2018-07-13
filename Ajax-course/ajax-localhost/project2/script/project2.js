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


    var numericRegex = /^[0-9]{5}$/;
    var userZipcode = document.getElementById('zipcodeInput').value;


    if ( userZipcode == '' || !userZipcode.match(numericRegex)) {

        var userInputContainer = document.getElementById('userInputContainer');
        var message = document.createTextNode('* Please enter zip code (has to be a number).');
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

            var windDirectionString = result.weatherObservation.windDirection;
            var windDirection = parseInt(windDirectionString);



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


            h3Temperature.appendChild(temperature);
            div.appendChild(h3Temperature);
            div.appendChild(h3Wind);
            project2Container.appendChild(div);



            getWindDirection(windSpeed, windDirection);


            if ( temperatureOutput >= 83 ) {

                var span = document.createElement('span');
                span.id = 'hotTemperatureImg';
                h3Temperature.appendChild(span);

                $('#hotTemperatureImg').append('<i id="sunImg" class="fa">&#xf185;</i>');


            } else if ( temperatureOutput <= 32 ) {

                var span = document.createElement('span');
                span.id = 'coldTemperatureImg';
                h3Temperature.appendChild(span);

                $('#coldTemperatureImg').append('<i id="coldImg" class="fa fa-thermometer-empty"></i>');

            }

            if ( windSpeed > 15 ) {

                var div = document.createElement('div');
                div.id = 'imageBox';
                var temperatureContainer = document.getElementById('temperatureContainer');
                var img = document.createElement('img');
                img.src = 'images/wind2.png';
                img.alt = 'wind';
                div.appendChild(img);
                temperatureContainer.appendChild(div);

            }

        }

    }

    xhr.send(null);

}


function getWindDirection(windSpeed, windDirection) {

    var h3Wind = document.getElementById('h3Wind');

    var windDirectionOutput = '';


    if ( windDirection == 0 ) {

        windDirectionOutput = 'N';

    } else if ( windDirection > 0 && windDirection <= 45 ) {

        windDirectionOutput = 'NE';

    } else if ( windDirection > 45 && windDirection <= 90 ) {

        windDirectionOutput = 'E';

    } else if ( windDirection > 90 && windDirection <= 135 ) {

        windDirectionOutput = 'SE';

    } else if ( windDirection > 135 && windDirection <= 180 ) {

        windDirectionOutput = 'S';

    } else if ( windDirection > 180 && windDirection <= 225 ) {

        windDirectionOutput = 'SW';

    } else if ( windDirection > 225 && windDirection <= 270 ) {

        windDirectionOutput = 'W';

    } else if ( windDirection > 270 && windDirection <= 315 ) {

        windDirectionOutput = 'NW';

    } else if ( windDirection > 315 && windDirection <= 360 ) {

        windDirectionOutput = 'N';
    }

    var windOutput = document.createTextNode(windSpeed + ' mph ' + windDirectionOutput + ' Wind');

    h3Wind.appendChild(windOutput);

}







