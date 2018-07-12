
/*
    //basic effects
    $(function () {

        $('h2').hide().slideDown();
        var li = $('li');
        li.hide().each(function () {

            $(this).delay(700 * 2).fadeIn(700);
        });
        li.on('click', function () {
            $(this).fadeOut(700);
        })
    });

*/

/*

//animation
$(function () {

    $('li').on('click', function () {

        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function () {
            $(this).remove();
        });
    });
});
*/

/*

//traversing

$(function () {
   var h2 = $('h2');
   $('ul').hide();
   h2.append('<a> show</a>');

   h2.on('click', function () {
       h2.next()
           .fadeIn(500)
           .children('.hot')
           .addClass('complete');
       h2.find('a').fadeOut();
   });
});

*/

$(function () {

  /*  var listItems = $('li');
    listItems.filter('.hot:last').removeClass('hot');

    console.log(listItems);

   $('li:not(.hot)').addClass('cool');
    listItems.has('em').addClass('complete');

    listItems.each(function() {

        var thisValue = $(this);

        if ( thisValue.is('.hot') ) {
            thisValue.prepend('Priority item: ');
        }
    });

    $('li:contains("Honey")').append(' (local)');
*/

    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool_new');



});

































