var students

var init = function() {
    
    students = [
                    {
                        'id':22,
                        'name':'John',
                        'email':'john@mail.com'
                    },
                    {
                        'id':23,
                        'name':'Sasha',
                        'email':'sasha@mail.com'
                    },
                    {
                        'id':24,
                        'name':'Mike',
                        'email':'mike@mail.com'
                    },
                    {
                        'id':25,
                        'name':'Jackie',
                        'email':'jackie@mail.com'
                    },
                    {
                        'id':26,
                        'name':'Luke',
                        'email':'luke@mail.com'
                    }
               ];
               
    outputStudents();
                   
}


function outputStudents() {

    var h4 = document.createElement('h4');
    var div = document.createElement('div');
    document.body.appendChild(h4);
    document.body.appendChild(div);


    for ( var index = 0; index < students.length; index ++ ) {

        var br = document.createElement('br');

        var outputId = document.createTextNode('Student Id: ' + students[index].id + ' | ');
        var outputEmail = document.createTextNode('Student Email: ' + students[index].email);

        div.appendChild(br);
        div.appendChild(outputId);
        div.appendChild(outputEmail);

    }
}










