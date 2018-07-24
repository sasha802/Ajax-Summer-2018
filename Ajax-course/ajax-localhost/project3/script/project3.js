$(document).ready(function () {
    console.log('test');

    var url = 'ToDo/allTasks.php';

    $.get(url, function (response) {
        console.log(response);
    }, 'xml');
});