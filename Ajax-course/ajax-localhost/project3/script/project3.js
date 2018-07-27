$(document).ready(function () {


    $('<table id="table"></table>').appendTo('body');

    var btnAddTask = $('#btnAddTask');
    var allTasksUrl = 'ToDo/allTasks.php';


    btnAddTask.click(function() {

        $('#inputError').remove();


        var inputTaskTemp = $('#inputAddTask').val();
        var inputTask = $.trim(inputTaskTemp);
        var addTaskUrl = 'ToDo/addTask.php';

        if ( inputTask.length === 0 && inputTask === '' ) {

            var errorMessage = $('<span id="inputError">*Please enter your task</span>');
            errorMessage.insertBefore('#table');

        } else {

           $.get( addTaskUrl, {'description': inputTask}, function(addTaskResponse) {

                console.log('add task id ' + addTaskResponse.id);

                var taskId = addTaskResponse.id;
                var taskDescription = addTaskResponse.description;

                displayTask(taskId, taskDescription);

            }, 'json' );
        }

    });

    $.ajax(allTasksUrl, {

        success: function(allTasksResponse) {


            $(allTasksResponse).find('task').each(function () {

                 var taskId = $(this).find('id').text();
                 var taskDescription = $(this).find('description').text();
                 displayTask(taskId, taskDescription);
            });

        },
        error: function() {

            outputWarning();
        },
        responseType: 'xml'
    });

});


function displayTask(taskId, taskDescription) {


    var deleteButton = $('<button type="submit" id="btn' + taskId + '"><i id="trashIcon" class="fa fa-trash"></i></button>');

    $('#table').append('<tr id="' + taskId +'">');
    $('tr').last().append('<td>');
    $('td').last().append(deleteButton);
    $('tr').last().append('<td>');
    $('td').last().append(taskDescription);


    $('#btn' + taskId).on('click', function () {

        var deleteTaskUrl = 'ToDo/deleteTask.php';
        
        $.ajax(deleteTaskUrl,{

            data: {
                'id': taskId
            },
            success: function (taskDeletedResponse) {

                $('tr#'+ taskId +'').remove();

                console.log(taskId);
            },
            error: function () {
                outputWarning();
            }
        });
    });
}


function outputWarning() {

    var h3Warning = $('<h3 id="warningMessage">Response Error.</h3>');
    h3Warning.appendTo('body');

}














