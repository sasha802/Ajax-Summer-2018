function init() {

    var plainText = document.getElementById('plainText');
    var jsonData = document.getElementById('json');

    var urlPlainText = 'planeText.php';
    var urlJsonData = 'jasonData.php';

    plainText.onclick = function() {
        makeAjaxRequestDemo(urlPlainText, function (xhr) {
            console.log(xhr.responseText);

        })
    }

    jsonData.onclick = function () {
        makeAjaxRequestDemo(urlJsonData, function (xhr) {

            var dataToJson = eval('(' + xhr.responseText + ')');

            console.log(dataToJson);

            for ( var index = 0; index < dataToJson.length; index ++ ) {
                alert(dataToJson[index].id);
                alert(dataToJson[index].name)

            }
        })
    }
}


function makeAjaxRequestDemo(url, callBackDemo) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {
            callBackDemo(xhr);
        }
    }

    xhr.send(null);
}