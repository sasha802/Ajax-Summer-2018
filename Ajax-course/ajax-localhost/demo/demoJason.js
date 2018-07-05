var fruits;

function addFruit() {

    var userFruit = document.getElementById('userFruit');
    var userFruitInput = userFruit.value;
    userFruit.value = '';
    
    var addNewFruit = {
                        'name':userFruitInput,
                        'price':function() {
                            console.log('in function price: $32');
                        }
                      }

    fruits.push(addNewFruit);
    outputFruits();
}

function outputFruits() {

   for (var index = 0; index < fruits.length; index ++) {
        if ( fruits[index] != null) {
          console.log(fruits[index].name);
          fruits[index].price();
        }
      
    }

}

var init = function() {
    
    var butnClick = document.getElementById('butnClick');
    butnClick.onclick = addFruit;
    
    fruits = [
                {
                    'name':'banana',
                    'price':function() {
                            console.log('in function price: $32');
                        }
                },
                
                {
                    'name':'apple',
                    'price':function() {
                            console.log('in function price: $32');
                       }
                },
                
                {
                    'name':'orange',
                    'price':function() {
                            console.log('in function price: $32');
                        }
                }
             ];
     
/*               
   delete fruits[1];
   console.log(fruits);
*/
   
 
    
}











