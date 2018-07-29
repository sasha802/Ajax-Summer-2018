$(document).ready(function () {

    $("#inputEmail").tooltip({
            content: "<strong>enter your email</strong>",
            track:true
        });

    $("#inputPassword").tooltip({
            content: "<strong>enter your password</strong>",
            track:true
        });

    $("#inputBirthdate").tooltip({
            content: "<strong>enter your birthdate</strong>",
            track:true
        });

    $("#inputBirthdate").datepicker({
            changeMonth: true,
            changeYear: true
    });

});