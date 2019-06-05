window.addEventListener("load", function () {
    document.getElementById('my-form').addEventListener("submit", function (e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        a = document.getElementById('first').value
        b = document.getElementById('last').value
        c = document.getElementById('email').value
        d = document.getElementById('phone').value
        e = document.getElementById('message').value

        contact = new ContactMe(a, b, c, d, e)

        var yup = validateMe(contact)

        // Should be triggered on form submit
        if (yup === false)
            alert('Formularz posiada błędy, popraw go proszę');
        else{
            alert('Formularz został wysłany, dziękuję!')
        }
    });
});

function validateMe(contact) {

    a = contact.first
    b = contact.last
    c = contact.email
    d = contact.phone
    e = contact.message


    var constraints = {
        email: {
            email: true
        }
    };

    var errors = validate(c, constraints);

    if (errors)
        return false;
    else
        return true;
}