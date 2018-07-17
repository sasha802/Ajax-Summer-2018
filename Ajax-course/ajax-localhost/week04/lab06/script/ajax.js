var init = function () {

    var url = 'index.php';

   makeAjaxRequest(url, function (xhrRequest) {

       var message = document.createTextNode('Data from the server.');
       var serverData = document.createTextNode(xhrRequest.responseText);
       var div = document.createElement('div');
       var h3 = document.createElement('h3');
       h3.appendChild(serverData);
       div.appendChild(message);
       div.appendChild(h3);
       document.body.appendChild(div);

   })
}


function makeAjaxRequest(url, callback) {

    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('GET', url);

    xhrRequest.onreadystatechange = function() {

        if ( xhrRequest.readyState == 4 && xhrRequest.status == 200 ) {

            callback(xhrRequest);

        }
    }

    xhrRequest.send(null);

}