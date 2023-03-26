$(function() {
    function sendData($form) {
        let dataString = $(this).serialize();
        return $.ajax(
            {
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: dataString,
        }
        );
    }

    $("form").validate();

    $("form").on("submit", function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            sendData($(this)).done(function () {
            $("#contact_form").html("<div id='message'></div>");
            $("#message")
            .html("<h2>Successfully Submitted!</h2>")
            .append("<p>We will be in touch soon.</p>")
            .hide()
            .fadeIn(1500);
            });
        };
    });
    });