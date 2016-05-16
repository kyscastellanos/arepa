$( document ).ready(function() {
    // Toggle error alerts
    if ($('.ninja-forms-field-error').children().length > 0) {
        $('.alert-danger').toggle();
    }

    // Toggle success alert and hide text field
    if ($('.ninja-forms-no-display').length > 0) {
        $('.alert-success').toggle();
        $('.input-group').toggle();
    }

    //Submit Ninja Form
    var submit = function(email) {
        $('.ninja-forms-field.email').val(email);
        $('.ninja-forms-form').submit();
    };

    // Submit on click
    $('.input-group .submit').click(function() {
        var email = $(this).parent().siblings().first().val();
        submit(email);
    });

    // Submit on enter
    $('input[type="text"]').keypress(function(e) {
        if (e.which == 13) {
            var email = $(this).val();
            submit(email);
        }
    });
});