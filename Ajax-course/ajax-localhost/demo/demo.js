function init() {
    
    var cat = new Cat();
    cat.email = 'cat@gmail.com';
    var btn = document.getElementById('butnClick');
    
    btn.onclick = function() {
        cat.smell();
    }
    
}

    
function Cat() {

    this.name;
    this.email;
    
    
    
    this.smell = function() {
        console.log(this);
        console.log(this.email + 'flower');
    }
}




Cat.prototype.sleep = function() {
    console.log('sleep every day');
}

Cat.jump = function() {

    console.log('cat is jumping');
}












