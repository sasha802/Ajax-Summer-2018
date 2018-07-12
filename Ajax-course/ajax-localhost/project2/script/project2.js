function init() {

    var xhr = new XMLHttpRequest();
    var zipcode = 53704
    var url = 'http://api.geonames.org/postalCodeSearchJSON';
    var parameters = '?formatted=true&postalcode=' + zipcode +'&maxRows=1&username=ponomarova&style=full';

    xhr.open('GET', url + parameters);

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {

            /*console.log(xhr.responseText);*/

            var result = JSON.parse(xhr.responseText);
            var placeName = result.postalCodes[0].placeName;
            var latitude = result.postalCodes[0].lat;
            var longitude = result.postalCodes[0].lng;

            console.log(placeName);
            console.log(latitude);
            console.log(longitude);

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

            console.log(xhr.responseText);

            var result = JSON.parse(xhr.responseText);
            var windSpeed = result.weatherObservation.windSpeed;

            console.log(windSpeed);

        }

    }

    xhr.send(null);


}

/*
* url = 'http://api.geonames.org/findNearByWeatherJSON';
* parameters = '?formatted=true&lat=42&lng=-2&username=ponomarova&style=full';
* */