$(document).ready(function () {

    $(function() {
        $( "#inputEmail" ).tooltip({
            content: "<strong>enter your email</strong>",
            track:true
        });
    });
    $(function() {
        $( "#inputPassword" ).tooltip({
            content: "<strong>enter your password</strong>",
            track:true
        });
    });
    $(function() {
        $( "#inputBirthdate" ).tooltip({
            content: "<strong>enter your birthdate</strong>",
            track:true
        });
    });

    $( function() {
        $( "#inputBirthdate" ).datepicker({
            changeMonth: true,
            changeYear: true
        });
    } );


});