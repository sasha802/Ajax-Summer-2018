function init() {

    var redBtn = document.getElementById('redBtn');
    var greenBtn = document.getElementById('greenBtn');
    var blueBtn = document.getElementById('blueBtn');
    redBtn.onclick = displayValue;
    greenBtn.onclick = displayValue;
    blueBtn.onclick = displayValue;
}

function displayValue() {
    console.log(this.value);
}