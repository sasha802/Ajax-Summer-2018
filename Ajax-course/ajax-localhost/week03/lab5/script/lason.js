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
                        'name':'Sivan',
                        'email':'mike@mail.com'
                    },
                    {
                        'id':26,
                        'name':'Luke',
                        'email':'mike@mail.com'
                    }
               ];
               
    outputStudents();
                   
}


function outputStudents() {

    for ( var index = 0; index < students.length; index ++ ) {
        
        console.log(students[index].id);
        console.log(students[index].email);
    
    }
}










