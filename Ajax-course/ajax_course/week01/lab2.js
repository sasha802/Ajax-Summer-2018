
var labTitle = 'Programming for Designers - Lab 2';

function init() {

    var id = 10;
    var name = 'Sasha';
    var bornInMadison = false;

    var information = document.getElementById('information');

    information.innerHTML = 'My id is ' + id + '<br />';
    information.innerHTML += 'My name is ' + name + '<br />';
    information.innerHTML += 'Born in Madison is ' + bornInMadison;

    printLabTitle();
}

function printLabTitle() {

    console.log(labTitle);
}