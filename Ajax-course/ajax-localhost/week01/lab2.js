
var labTitle = 'Programming for Designers - Lab 2';

function init() {

    var id = 10;
    var name = 'Sasha';
    var bornInMadison = false;

    console.log('Id is: ' + id);
    console.log('Name is: ' + name);
    console.log('Born in Madison is: ' + bornInMadison);

    var userInformation = 'My name is ' + name + '. ';
        userInformation += 'My id is ' + id + ' ';
        userInformation += 'and born in Madison is ' + bornInMadison;

    var textNode = document.createTextNode(userInformation);
    var h3 = document.createElement('h3');
    h3.id = 'information';
    h3.appendChild(textNode);
    document.body.appendChild(h3);

    printLabTitle();
}

function printLabTitle() {

    console.log(labTitle);
}