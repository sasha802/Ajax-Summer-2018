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


    var userZipcode = document.getElementById('zipcodeInput').value;

    if ( userZipcode.length == 0 && userZipcode == '' ) {

        var userInputContainer = document.getElementById('userInputContainer');
        var message = document.createTextNode('Please enter zip code');
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
            var div = document.createElement('div');
            var hr = document.createElement('hr');
            var h2 = document.createElement('h2');
            var city = document.createTextNode(placeName);
            div.id = 'cityOutputContainer';
            h2.appendChild(city);
            div.appendChild(hr);

            div.appendChild(h2);
            document.body.appendChild(div);


            console.log(placeName);

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
            var windSpeed = result.weatherObservation.windSpeed;
            var temperatureString = result.weatherObservation.temperature;
            var temperatureCelsius = parseInt(temperatureString);

            var temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
            var temperatureOutput = Math.round(temperatureFahrenheit);

            //output wind and speed
            var div = document.createElement('div');
            div.id = 'temperatureContainer';
            var h3Temperature = document.createElement('h3');
            h3Temperature.id = 'h3Temperature';
            var h3Wind = document.createElement('h3');
            var temperature = document.createTextNode(temperatureOutput + '\u00B0 Fahrenheit');
            var wind = document.createTextNode(windSpeed + ' mph Wind');


            h3Temperature.appendChild(temperature);
            h3Wind.appendChild(wind);
            div.appendChild(h3Temperature);
            div.appendChild(h3Wind);
            document.body.appendChild(div);



            if ( temperatureOutput >= 83 ) {

                h3Temperature.appendChild(temperature);
                h3Wind.appendChild(wind);
                div.appendChild(h3Temperature);
                div.appendChild(h3Wind);
                document.body.appendChild(div);

                var span = document.createElement('span');
                span.id = 'hotTemperatureImg';
                h3Temperature.appendChild(span);

                $('#hotTemperatureImg').html('<i style="font-size:50px; color: red;" class="fa">&#xf185;</i>');


            } else if ( temperatureOutput <= 32 ) {

                h3Temperature.appendChild(temperature);
                h3Wind.appendChild(wind);
                div.appendChild(h3Temperature);
                div.appendChild(h3Wind);
                document.body.appendChild(div);

                var span = document.createElement('span');
                span.id = 'coldTemperatureImg';
                h3Temperature.appendChild(span);

                $('#coldTemperatureImg').html('<i style="font-size: 50px; color: blue;" class="fa fa-thermometer-empty" aria-hidden="true"></i>');

            }

        }

    }

    xhr.send(null);

}

