var init = function () {

    var averageBtn = document.getElementById('averageBtn');
    var goodBtn = document.getElementById('goodBtn');
    var excellentBtn = document.getElementById('excellentBtn');

    var tallBtn = document.getElementById('tallBtn');
    var averageW3cBtn = document.getElementById('averageW3cBtn');
    var shortBtn = document.getElementById('shortBtn');


    inline;


    averageBtn.onclick = dotNotation;
    goodBtn.onclick = dotNotation;
    excellentBtn.onclick = dotNotation;


    if (window.addEventListener) {

        tallBtn.addEventListener('click', w3c, false);
        averageW3cBtn.addEventListener('click', w3c, false);
        shortBtn.addEventListener('click', w3c, false);

    } else {

        tallBtn.attachEvent('onclick', w3c);
        averageW3cBtn.attachEvent('onclick', w3c);
        shortBtn.attachEvent('onclick', w3c);
    }



}


function inline(value) {

    console.log('Clicking button from inline function ' + value);
}


function dotNotation() {

    console.log('Clicking button from dotNotation function ' + this.value);
}


function w3c() {

    var control;

    if ( window.event ) {

        control = window.event.srcElement;

    } else {

        control = this;
    }

    console.log('Clicking button from w3c function ' + control.value);
}







