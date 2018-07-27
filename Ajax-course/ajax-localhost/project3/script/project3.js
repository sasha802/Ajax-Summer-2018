$(document).ready(function () {

    $('#warningMessage').remove();
    $('<table id="table"></table>').appendTo('body');

    var btnAddTask = $('#btnAddTask');
    var allTasksUrl = 'ToDo/allTasks.php';


    btnAddTask.click(function() {

        var inputTask = $('#inputAddTask').val();
        var addTaskUrl = 'ToDo/addTask.php';

        $.get( addTaskUrl, {'description': inputTask}, function(addTaskResponse) {

            if ( addTaskResponse ) {

                var taskIdAdd = addTaskResponse.id;
                var taskDescriptionAdd = addTaskResponse.description;

                displayTask(taskIdAdd, taskDescriptionAdd);

            }
        }, 'json' );
    });


    $.get( allTasksUrl, function(allTasksResponse) {

        if ( allTasksResponse ) {

            $(allTasksResponse).find('task').each(function () {

                var taskId = $(this).find('id').text();
                var taskDescription = $(this).find('description').text();

                displayTask(taskId, taskDescription);

            });

        } else {
            outputWarning();
        }
        
    }, 'xml' );

});


function displayTask(taskIdOutput, taskDescriptionOutput) {

    var deleteButton = $('<button type="submit" id="' + taskIdOutput + '"><i id="trashIcon" class="fa fa-trash"></i></button>');

    $('#table').append('<tr>');
    $('tr').last().append('<td>');

    $('td').last().append(deleteButton);
    $('td').last().append(taskDescriptionOutput);
    $('td').last().append(taskIdOutput);

    $('button').on('click', function () {
        $(this).parents('tr').remove();

    });

}


function outputWarning() {

    var h3Warning = $('<h3 id="warningMessage">You have no tasks.</h3>');
    h3Warning.appendTo('body');


}














