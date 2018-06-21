function validateForm() {

    var currentMessage = document.getElementById('message');

    if ( currentMessage ) {

        currentMessage.parentNode.removeChild(currentMessage);
    }


    var h3 = document.createElement('h3');

    h3.id = 'message';

    var userInput = document.getElementById('userName').value;
    var errorMessage = document.createTextNode('Please enter your name');
    var successMessage = document.createTextNode('Welcome ' + userInput);


    if ( userInput.length == 0 ) {

        document.body.appendChild(h3);
        h3.appendChild(errorMessage);

    }  else if ( userInput.length > 0 ) {

        document.body.appendChild(h3);
        h3.appendChild(successMessage);

    }
}