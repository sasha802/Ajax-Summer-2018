
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

    var sqFootageUserInputInt = parseInt(sqFootageUserInputString);


    var oneStoryHouseCost = 175;
    var twoStoryHouseCost = 135;
    var garageCostPerVehicle = 15000;
    var vinylCost = 0;
    var woodCost = 5000;
    var brickCost = 8000;
    var stuccoCost = 6000;
    var stoneCost = 16000;
    var materialExtraCostPerSqFoot = 10;

    validateHouseTypeInput(houseTypeUserInput);
    validateColorUserInput(colorUserInput);
    validateMaterialTypeUserInput(materialTypeUserInput);
    validateFootageUserInput(sqFootageUserInputInt);


    var houseTypeCost = calculateHouseTypeCost(oneStoryHouseCost, twoStoryHouseCost, houseTypeUserInput, sqFootageUserInputInt);
    var garageCost = calculateGarageCost(garageCostPerVehicle, vehiclesUserInput);
    var externalMaterialCost = calculateExternalMaterialCost(vinylCost, woodCost, brickCost, stuccoCost, stoneCost,
                                materialExtraCostPerSqFoot, sqFootageUserInputInt, materialTypeUserInput);

    var totalEstimate = calculateTotalEstimate(houseTypeCost, garageCost, externalMaterialCost);

    console.log(totalEstimate);
}


function validateHouseTypeInput(houseTypeUserInput) {

    errorMessage = 'Please enter house type';

    if ( houseTypeUserInput.length == 0 ) {

        getErrorMessage();

    }

}


function validateColorUserInput(colorUserInput) {

    errorMessage = 'Please enter color';

    if ( colorUserInput.length == 0 ) {

        getErrorMessage();

    }

}


function validateMaterialTypeUserInput(materialTypeUserInput) {

    errorMessage = 'Please enter material type';

    if ( materialTypeUserInput.length == 0 ) {

        getErrorMessage();

    }
}


function validateFootageUserInput(sqFootageUserInputInt) {

    errorMessage = 'Please enter number of square footage';

    if ( isNaN(sqFootageUserInputInt) ) {

        getErrorMessage();

    }
}


function calculateHouseTypeCost(oneStoryHouseCost, twoStoryHouseCost, houseTypeUserInput, sqFootageUserInputInt) {

    var houseTypeCost = null;

    if ( houseTypeUserInput == '1' ) {

        houseTypeCost = oneStoryHouseCost * sqFootageUserInputInt;

    } else if ( houseTypeUserInput == '2' ) {

        houseTypeCost = twoStoryHouseCost * sqFootageUserInputInt;
    }

    return houseTypeCost;


}

function calculateGarageCost(garageCostPerVehicle, vehiclesUserInput) {

    var totalGarageCost = null;


    if ( vehiclesUserInput == '1' ) {

        totalGarageCost = garageCostPerVehicle;

    } else if ( vehiclesUserInput == '2' ) {

        totalGarageCost = garageCostPerVehicle * 2;

    } else if ( vehiclesUserInput == '3' ) {

        totalGarageCost = garageCostPerVehicle * 3;

    }

    return totalGarageCost;

}


function calculateExternalMaterialCost(vinylCost, woodCost, brickCost, stuccoCost, stoneCost,
                                       materialExtraCostPerSqFoot, sqFootageUserInputInt, materialTypeUserInput) {

    var totalExternalMaterialCost = null;

    if ( materialTypeUserInput == 'vinyl' ) {

        totalExternalMaterialCost = vinylCost;

    } else if ( materialTypeUserInput == 'wood' ) {

        totalExternalMaterialCost = woodCost + (materialExtraCostPerSqFoot * sqFootageUserInputInt);

    } else if ( materialTypeUserInput == 'brick') {

        totalExternalMaterialCost = brickCost + (materialExtraCostPerSqFoot * sqFootageUserInputInt);

    } else if ( materialTypeUserInput == 'stucco' ) {

        totalExternalMaterialCost = stuccoCost;

    } else if ( materialTypeUserInput == 'stone' ) {

        totalExternalMaterialCost = stoneCost;
    }


    return totalExternalMaterialCost;

}


function calculateTotalEstimate(houseTypeCost, garageCost, externalMaterialCost) {

    var totalEstimate = houseTypeCost + garageCost + externalMaterialCost;

    return totalEstimate;
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




























