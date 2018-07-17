
$(document).ready(function () {

    var message = 'cubs stink'
    $('li').text(message);

    var headerContent = $('#header').html();
    console.log('header id content: ' + headerContent);


    var link = $('.link');
    console.log('Total number of elements with the class link: ' + link.size());


    var odd = $('.odd td');
    odd.addClass('oddColumn');

});