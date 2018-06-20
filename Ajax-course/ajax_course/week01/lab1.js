function validateForm() {

    var userInput = document.getElementById('userName').value;
    var inputResult = document.getElementById('inputResult');
    var output = '';
    console.log(userInput);
    console.log(inputResult);

    if ( !isNaN(userInput) ) {

        output = '<span style="color: red;">Please enter your name</span>';

    } else {

        output = '<span style="color: #00008b">Welcome ' + userInput + '!</span>';
    }

    inputResult.innerHTML = output;
}