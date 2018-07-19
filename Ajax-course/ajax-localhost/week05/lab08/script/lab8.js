$(document).ready(function () {

    var button = $('<input value="click me" type="button" />');
    button.appendTo('body');


    button.click(function () {

        console.log('cubs stink');
    });


/*
 li.mouseover(function () {
        $(this).css({
            'background-color': '#ffed01'
        });
    }).mouseout(function () {
        $(this).css({
            'background-color': '#fff'
        });
    });
*/


    $('body')

        .on('mouseover', 'li', function () {

            $(this).css({
                'background-color': '#ffed01'
            });

    }) .on('mouseout', 'li', function () {

            $(this).css({
                'background-color': '#fff'
            });

    });


    $('<li>New list</li>').appendTo('#toDoList');

    /*
    * New list does not have mouseover and mouseout because I used click event that is pointing to
    * the current items on the page. New list has been created after mouseover and mouseout had
    * been called.
    * */

    $('<br/>').appendTo('body');

    var newButton = $('<input type="button" value="remove mouse events" />');
    newButton.appendTo('body');


    newButton.click(function () {

        $('body')
            .off('mouseover', 'li')
            .off('mouseout', 'li');

    });
});