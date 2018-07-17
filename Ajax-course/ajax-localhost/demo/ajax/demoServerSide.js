
function init() {

    runAjaxRequest();
}


function runAjaxRequest() {

    var xhr = new XMLHttpRequest();
    var url = 'response.php';

    xhr.open('GET', url);

    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 && xhr.status == 200 ) {


            var response = eval('(' + xhr.responseText + ')');

        }
    }

    xhr.send(null);
}



/*
function init() {

    var btnAjax = document.getElementById('btnAjax');
    btnAjax.onclick = ajax;

}


function ajax() {

    var xhr = new XMLHttpRequest();
    var url = 'demoServerSide.php';

    xhr.open('GET', url);

    //call back
    xhr.onreadystatechange = function() {

        if ( xhr.readyState == 4 ) {
            alert(xhr.responseText);

            var h1 = document.createElement('h1');
            var div = document.createElement('div');
            div.id = 'container';
            document.body.appendChild(div);
            var divContainer = document.getElementById('container');
            var message = document.createTextNode('Greetings');
            h1.appendChild(message);
            divContainer.appendChild(h1);

        }
    }


    xhr.send(null);
}*/
