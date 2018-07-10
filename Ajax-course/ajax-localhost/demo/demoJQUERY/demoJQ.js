$(document).ready(function () {

    $(':header').addClass('headline');

    var $content = $('li').html();

    $('li em').addClass('banana');
    $('li#two').addClass('nuts');

    $('li[id!="one"]')
        .hide()
        .delay(500)
        .fadeIn(1400);

    var listItem = $('li').text();
    $('li').append('<p>' + listItem + '</p>');

    console.log($('ul').text());

    insertElement();


});


function insertElement() {

    var newFragment = $('<li>');

    var newItem = $('<p class="newItem">Item</p>');


    $('ul').before('<p>Just updated</p>');
    $('ul').after(newItem);
    $('#three').prepend('+ ');

    $('li#one').attr('class', 'newAttribute');

    $('li').css({
        'color': 'red',
        'padding-left': '+=20'
    });

    $('li').each(function () {
        var ids = this.id;

        $(this).append('<span class="order">' + ids + '</span>');

    });



}