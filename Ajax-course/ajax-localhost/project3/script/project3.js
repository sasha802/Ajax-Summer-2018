$(document).ready(function () {

    var url = 'ToDo/allTasks.php';

    $('<table id="table"></table>').appendTo('body');

    $.get(url, function(response) {

        $(response).find('task').each(function () {

            var taskId = $(this).find('id').text();
            var description = $(this).find('description').text();
            var deleteButton = $('<button type="submit" id="delete"><i id="trashIcon" class="fa fa-trash"></i></button>');


             $('#table').append('<tr>');
             $('tr').last().append('<td>');

             $('td').last().append(deleteButton);
             $('td').last().append(description);

            $('button').on('click', function () {
                $(this).parents('tr').remove();

            });
        });
        
    }, 'xml');





});