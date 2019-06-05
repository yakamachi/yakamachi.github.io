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
        else {
            alert('Formularz został wysłany, dziękuję!');
            document.getElementById("my-form").submit();
        }
    });
});

function validateMe(contact) {

    var constraints = {
        first: {
            format: {

                pattern: "[a-zA-Z]+",
                flags: "i",
                message: "Niepoprawne imię"
            }
        },
        last: {
            format: {

                pattern: "[a-zA-Z]+",
                flags: "i",
                message: "Niepoprawne nazwisko"
            }
        },
        email: {
            email: true
        },
        phone: {
            format: {
                pattern: "[0-9]{3}-[0-9]{3}-[0-9]{3}",
                flags: "i",
                message: "Niepoprawny numer"
            }
        }
    };

    var errore = validate(contact, constraints);

    if (errore)
        return false;
    else
        return true;
}