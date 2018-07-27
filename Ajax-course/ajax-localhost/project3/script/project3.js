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


                var taskIdAdd = addTaskResponse.id;
                var taskDescriptionAdd = addTaskResponse.description;

                displayTask(taskIdAdd, taskDescriptionAdd);

            }, 'json' );
        }

    });


    $.get( allTasksUrl, function(allTasksResponse) {

        var taskLength = $(allTasksResponse).find('task').length;

            console.log('task length ' + taskLength);

            $(allTasksResponse).find('task').each(function () {

                var taskId = $(this).find('id').text();
                var taskDescription = $(this).find('description').text();

                displayTask(taskId, taskDescription);

            });
        
    }, 'xml' );

});


function displayTask(taskIdOutput, taskDescriptionOutput) {

    var deleteButton = $('<button type="submit" id="' + taskIdOutput + '"><i id="trashIcon" class="fa fa-trash"></i></button>');

    $('#table').append('<tr>');
    $('tr').last().append('<td>');
    $('td').last().append(deleteButton);
    $('tr').last().append('<td>');
    $('td').last().append(taskDescriptionOutput);
    $('tr').last().append('<td>');
    $('td').last().append(taskIdOutput);

    $('button').on('click', function () {

        var $this = $(this);

        var taskIdToDelete = $this.closest('tr').children('td:last-child').text()
        var deleteTaskUrl = 'ToDo/deleteTask.php';

        $.get(deleteTaskUrl, {'id': taskIdToDelete}, function (taskDeletedResponse) {

            if ( taskDeletedResponse == 1 ) {

                $this.parents('tr').remove();
            }

        });
    });
}


function outputWarning() {

    var h3Warning = $('<h3 id="warningMessage">You have no tasks.</h3>');
    h3Warning.appendTo('body');

}














