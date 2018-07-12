$(function () {

    var newItemButton = $('#newItemButton');
    var newItemForm = $('#newItemForm');
    var textInput = $('input:text');

    newItemButton.show();
    newItemForm.hide();


    $('#showForm').on('click', function () {
        newItemButton.hide();
        newItemForm.show();
    });


    newItemForm.on('submit', function (element) {

        element.preventDefault();

        var newText = $('input:text').val();

        $('li:last').after('<li>' + newText + '</li>');
        newItemForm.hide();
        newItemButton.show();
        textInput.val('');

    });


    var window = $('window');
    var slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - window.height() - 500;


    window.on('scroll', function () {


        if ( (endZone) < window.scrollTop() ) {

            slideAd.animate({'right': '0px'}, 250);

        } else {
            slideAd.stop(true).animate({'right': '-360px'}, 250);
        }
    });
});