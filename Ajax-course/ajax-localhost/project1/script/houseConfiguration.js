
var errorMessage = '';

function displayEstimate() {

    removeErrorMessage();
    houseConfigurationData();
    
}

function houseConfigurationData() {

    var houseType = document.getElementById('hoseType');
    var houseTypeUserInput = houseType.options[houseType.selectedIndex].value;

    var color = document.getElementById('color');
    var colorUserInput = color.options[color.selectedIndex].value;

    var vehicles = document.getElementsByName('vehicles');
    var vehiclesUserInput = '';

    for ( var index = 0; index < vehicles.length; index ++ ) {

        if ( vehicles[index].checked ) {

            vehiclesUserInput = vehicles[index].value;
        }
    }

    var materialType = document.getElementById('materialType');
    var materialTypeUserInput = materialType.options[materialType.selectedIndex].value;

    var sqFootageUserInputString = document.getElementById('sqFootage').value;


    validateHouseTypeInput(houseTypeUserInput);
    validateColorUserInput(colorUserInput);
    validateMaterialTypeUserInput(materialTypeUserInput);
    validateFootageUserInput(sqFootageUserInputString);


}


function validateHouseTypeInput(houseTypeUserInput) {

    errorMessage = 'Please enter house type';

    if ( houseTypeUserInput.length == 0 ) {

        getErrorMessage();

    } else {

        console.log(houseTypeUserInput);
    }

}


function validateColorUserInput(colorUserInput) {

    errorMessage = 'Please enter color';

    if ( colorUserInput.length == 0 ) {

        getErrorMessage();

    } else {

        console.log(colorUserInput);
    }

}


function validateMaterialTypeUserInput(materialTypeUserInput) {

    errorMessage = 'Please enter material type';

    if ( materialTypeUserInput.length == 0 ) {

        getErrorMessage();

    } else {

        console.log(materialTypeUserInput);
    }
}


function validateFootageUserInput(sqFootageUserInputString) {

    errorMessage = 'Please enter number of square footage';

    var sqFootageUserInputInt = parseInt(sqFootageUserInputString);

    if ( sqFootageUserInputString.trim().length == 0 || sqFootageUserInputString.trim() == ''
        || isNaN(sqFootageUserInputInt) ) {

        getErrorMessage();

    } else {
        console.log(sqFootageUserInputString);
    }
}


function getErrorMessage() {

    var h4 = document.createElement('h4');
    h4.className = 'message';

    var messageTextNode = document.createTextNode(errorMessage);
    document.body.appendChild(h4);

    h4.appendChild(messageTextNode);
}


function removeErrorMessage() {

    var errorMessage = document.getElementsByClassName('message');

    while ( errorMessage.length > 0 ) {

        errorMessage[0].remove();

    }
}




























