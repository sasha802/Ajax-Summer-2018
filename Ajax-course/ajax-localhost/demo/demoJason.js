
function init() {

    var xmlData = '<states>\n' +
        '    <state>\n' +
        '        <abbreviation>WI</abbreviation>\n' +
        '        <fulltext>Wisconsin</fulltext>\n' +
        '    </state>\n' +
        '    <state>\n' +
        '        <abbreviation>IL</abbreviation>\n' +
        '        <fulltext>Illinois</fulltext>\n' +
        '    </state>\n' +
        '    <state>\n' +
        '        <abbreviation>MN</abbreviation>\n' +
        '        <fulltext>Minnesota</fulltext>\n' +
        '    </state>\n' +
        '</states>';


    var jasonDataStates = [

        {
            'abbreviation': 'WI',
            'fulltext': 'Wisconsin'
        },

        {
            'abbreviation': 'IL',
            'fulltext': 'Illinois'
        },

        {
            'abbreviation': 'MN',
            'fulltext': 'Minnesota'
        }

    ];

    var abbreviation = jasonDataStates[1].abbreviation;
    var fulltext = jasonDataStates[1].fulltext;

    console.log(abbreviation);
    console.log(fulltext);


   /* for ( var index = 0; index < jasonDataStates.length; index ++ ) {
        console.log(jasonDataStates[index].abbreviation);
    }*/
}

























/*
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
     
/!*
   delete fruits[1];
   console.log(fruits);
*!/
   
 
    
}











*/
