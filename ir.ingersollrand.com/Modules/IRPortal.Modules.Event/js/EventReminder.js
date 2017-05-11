function SaveEventReminder(eventWorkflowId, interval, emailAddress, errorCtlName, languageId) {
    var requestVerificationToken = $('#__RequestValidationToken').val();
    var data =
    {
        LanguageId: languageId,
        EmailAddress: emailAddress,
        Interval: interval,
        EventWorkflowId: eventWorkflowId
    }
    
    console.log(JSON2.stringify(data));
    $.ajax({
        type:'POST',
        url: '/api/Event/SaveEventReminder/',
        data: JSON2.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            'RequestVerificationToken': requestVerificationToken
        },
        success: function (msg) {
            if (msg) {
                $('#' + errorCtlName).text("The event reminder was created.");
                $('#' + errorCtlName).css('color', 'black');
            } else {
                $('#' + errorCtlName).text("Failed to create event reminder.");
                $('#' + errorCtlName).css('color', 'red');
            }

        },
        error: function (msg) {
            $('#' + errorCtlName).text("Failed to create event reminder.");
            $('#' + errorCtlName).css('color', 'red');

        }
    });
}