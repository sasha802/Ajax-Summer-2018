/*
function init() {
    
    var cat = new Cat();
    cat.email = 'cat@gmail.com';
    var btn = document.getElementById('butnClick');
    
    btn.onclick = function() {
        cat.smell();
    }

    
}
*/
function init() {

    var rectangle = new Rectangle();

    console.log(rectangle.perimeter(3, 3));
}

function Rectangle() {
    var _length;
    var _width;
}

Rectangle.prototype.perimeter = function(lengthValue, widthValue) {
    var perimeterOutput = (2 * lengthValue) + (2 * widthValue);


    return perimeterOutput;
}


/*
function perimeter() {

    var rectangle = new Rectangle();
    rectangle.setLength(2);
    rectangle.setWidth(3);

    var length = rectangle.getLength();
    var width = rectangle.getWidth();

    var perimeterOutput = (2 * length) + (2 * width);

    console.log('perimeter' + perimeterOutput);

    return perimeterOutput;

}
*/



function Cat() {

    this.name;
    this.email;



    this.smell = function() {
        console.log(this);
        console.log(this.email + 'flower');
    }

    i = 0;
    console.log(i);
}


Cat.prototype.sleep = function() {
    console.log('sleep every day');
}

Cat.jump = function() {

    console.log('cat is jumping');
}












