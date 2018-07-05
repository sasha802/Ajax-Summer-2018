var init = function() {
    
    var listElement = document.getElementsByClassName('list');
    var tagElement = document.getElementsByTagName('li');
    var selector = document.querySelector('li.list');
    var selectorAll = document.querySelectorAll('li.list');
    
    var startItem = document.getElementById('two');
    var prevItem = startItem.previousElementSibling;
    var nextItem = startItem.nextElementSibling;
   
    var itemTwoText = startItem.innerHTML;
    var newElement = document.createElement('p');
    var newText = document.createTextNode('New Hello Now');
    newElement.appendChild(newText);
    var position = document.getElementsByTagName('li')[2];
    position.appendChild(newText);
    
    var removeSeven = document.getElementById('seven');
    var parent = removeSeven.parentNode
    
   // parent.removeChild(removeSeven);
    
    
    startItem.innerHTML = 'hello now';
    
    console.log(removeSeven.getAttribute('class'));
    console.log(removeSeven.hasAttribute('class'));
    console.log(removeSeven.setAttribute('class', 'mySeven'));


    prevItem.className = 'list2';
    nextItem.className = 'list3';

    
/*    
    
    for ( var index = 0; index < selectorAll.length; index ++ ) {
        
        if ( index == 1 || index == 3) {
            selectorAll[index].className = 'list1';
        
        } else {
            selectorAll[index].className = 'list2';
        }       
    }
       
        selector.className = 'list1'; 
    
    if ( listElement.length >= 1 ) {
        
        var firstElement = listElement[2];
       firstElement.className = 'list1';
    }
    
    if ( tagElement.length >= 1 ) {
        
        var firstLiElement = tagElement[0];
        firstLiElement.className = 'list1';
    }
*/ 
}












