
var labTitle = 'Programming for Designers - Lab 2';

function init() {

    var id = 10;
    var name = 'Sasha';
    var bornInMadison = false;

    var heading = 'Lab Two';
    var textNode = document.createTextNode(heading);
    var h1 = document.createElement('h1');


    console.log('Id is: ' + id);
    console.log('Name is: ' + name);
    console.log('Born in Madison is: ' + bornInMadison);


    h1.appendChild(textNode);
    document.body.appendChild(h1);

    printLabTitle();

}

function printLabTitle() {

    console.log(labTitle);
}