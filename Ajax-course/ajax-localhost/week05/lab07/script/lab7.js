
$(document).ready(function () {

    var newText = 'cubs stink'
    $('li').text(newText);

    var headerContent = $('#header').html();
    console.log('content of the id = header ' + headerContent);


    var link = $('.link');
    console.log('Total number of elements with the class link: ' + link.size());


    var odd = $('.odd td');
    odd.addClass('oddColumn');

});