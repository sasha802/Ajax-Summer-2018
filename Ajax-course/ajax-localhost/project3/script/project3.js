/*jslint browser: true*/ /*global  $*/

function outputWarning() {

    "use strict";

    var h3Warning = $('<h3 id="warningMessage">Response Error.</h3>');
    h3Warning.insertBefore('#table');

}


function outputTaskStatusMessage() {

    "use strict";

    var taskStatusMessage = $('<div id="taskStatus">You have no tasks</div>');
    taskStatusMessage.insertBefore('#table');

}


function userInputErrorMessage() {

    "use strict";

    var errorMessage = $('<div id="inputError">*Please enter your task</div>');
    errorMessage.insertBefore('#table');

}


function deleteTaskRequest(taskId) {

    "use strict";

    $('#btn' + taskId).on('click', function () {

        var deleteTaskUrl = 'ToDo/deleteTask.php';


        $.ajax(deleteTaskUrl,{

            data: {
                'id': taskId
            },

            success: function () {

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


function manageTaskOutput(taskId, taskDescription) {

    "use strict";

    var deleteButton = $('<button type="submit">').html('<i id="trashIcon" class="fa fa-trash-o"></i>').attr('id', 'btn' + taskId);


    $('#table').append('<tr id="' + taskId +'">');
    $('tr').last().append('<td>');
    $('td').last().append(deleteButton);
    $('tr').last().append('<td>');
    $('td').last().append(taskDescription);


    deleteTaskRequest(taskId);

}


function getAllTasksRequest() {

    "use strict";

    var allTasksUrl = 'ToDo/allTasks.php';


    $.ajax(allTasksUrl, {

        success: function(allTasksResponse) {

            $(allTasksResponse).find('task').each(function () {

                var taskId = $(this).find('id').text();
                var taskDescription = $(this).find('description').text();

                manageTaskOutput(taskId, taskDescription);

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

}


function addTaskRequest(inputTask) {

    "use strict";

    var addTaskUrl = 'ToDo/addTask.php';


    $.get( addTaskUrl, {'description': inputTask}, function(addTaskResponse) {

        var taskId = addTaskResponse.id;
        var taskDescription = addTaskResponse.description;

        manageTaskOutput(taskId, taskDescription);

    }, 'json' );

}


function runAddTaskButton(btnAddTask) {

    "use strict";

    btnAddTask.click(function() {

        $('#inputError').remove();
        $('#taskStatus').remove();


        var inputTaskTemp = $('#inputAddTask').val();
        var inputTask = $.trim(inputTaskTemp);


        if ( inputTask.length === 0 && inputTask === '' ) {

            userInputErrorMessage();

        } else {

            addTaskRequest(inputTask);

        }
    });

}


$(document).ready(function () {

    "use strict";

    $('div #taskStatus').remove();

    $('<table id="table"></table>').appendTo('#project3Container');

    var btnAddTask = $('#btnAddTask');


    getAllTasksRequest();
    runAddTaskButton(btnAddTask);

});










