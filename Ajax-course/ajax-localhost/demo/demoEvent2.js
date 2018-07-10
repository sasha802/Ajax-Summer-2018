var init = function() {

   var thanksMsg = document.getElementById('newMassage');

    if ( thanksMsg ) {

        thanksMsg.parentNode.removeChild(thanksMsg);

    }

    window.addEventListener('load', setup, false);

   var userName = document.getElementById('username');


    if ( userName.addEventListener ) {

        userName.addEventListener('blur', function () { checkUserName(userName, 5) }, false);
        userName.addEventListener('blur', function (e) { test(e, 19); }, false);

    } else {
        userName.attachEvent('onblur', function () {
            checkUserName(userName, 5)
        });

        userName.attachEvent('onblur', function () {
            checkUserName(userName, 5);
        });

    }


}

function setup() {

    var textInput = document.getElementById('username');
    textInput.focus();
}


function checkUserName(userName, length) {

    var feedback = document.getElementById('feedback');
    var div = document.createElement('div');
    div.id = 'newMessage';
    feedback.appendChild(div);
    var divMessage = document.getElementById('newMessage');
    var message = 'You enter your username';

    if ( userName.value.length < length ) {

        divMessage.textContent = 'Enter more than' + length + ' char.';

    } else {
        divMessage.textContent = message;
    }
}

function test(e, number) {
    var target = e.target;
    console.log(target);
    console.log(number);
}



