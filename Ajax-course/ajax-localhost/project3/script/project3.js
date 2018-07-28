$(document).ready(function () {

    $('div #taskStatus').remove();

    $('<table id="table"></table>').appendTo('#project3Container');

    var btnAddTask = $('#btnAddTask');
    var allTasksUrl = 'ToDo/allTasks.php';


    btnAddTask.click(function() {

        $('#inputError').remove();
        $('#taskStatus').remove();


        var inputTaskTemp = $('#inputAddTask').val();
        var inputTask = $.trim(inputTaskTemp);
        var addTaskUrl = 'ToDo/addTask.php';

        if ( inputTask.length === 0 && inputTask === '' ) {

            userInputErrorMessage();

        } else {

           $.get( addTaskUrl, {'description': inputTask}, function(addTaskResponse) {

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

            if ( $('#table tr').length === 0  ) {

                outputTaskStatusMessage();
            }

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

                if ( $('#table tr').length === 0  ) {

                    outputTaskStatusMessage();
                }

            },
            error: function () {
                outputWarning();
            }
        });
    });
}


function outputWarning() {

    var h3Warning = $('<h3 id="warningMessage">Response Error.</h3>');
    h3Warning.insertBefore('#table');
}


function outputTaskStatusMessage() {

    var taskStatusMessage = $('<div id="taskStatus">You have no tasks</div>');
    taskStatusMessage.insertBefore('#table');
}

function userInputErrorMessage() {

    var errorMessage = $('<div id="inputError">*Please enter your task</div>');
    errorMessage.insertBefore('#table');
}













