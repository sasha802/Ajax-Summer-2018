function init() {

    var btnSend = document.getElementById('btnSend');

    //using POST


 /*   btnSend.onclick = function () {

        var textName = document.getElementById('textName');
        var userName = textName.value;

        var textPassword = document.getElementById('textPassword');
        var userPassword = textPassword.value;

        var xhr = new XMLHttpRequest();
        var url = 'ajaxParameters.php';
        var parameter = 'id=2&name=' + userName;

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {

            if ( xhr.readyState == 4 && xhr.status == 200 ) {

                console.log(xhr.responseText);
            }
        }

        xhr.send(parameter);
    }
*/




    //using GET

    btnSend.onclick = function () {
        var textName = document.getElementById('textName');
        var userName = textName.value;
        var xhr = new XMLHttpRequest();
        var url = 'ajaxParameters.php';
        var parameter = '?name=' + userName;

        xhr.open('GET', url + parameter);

        xhr.onreadystatechange = function() {

            if ( xhr.readyState == 4 && xhr.status == 200 ) {

                console.log(xhr.responseText);
            }
        }

        xhr.send(null);
    }
}