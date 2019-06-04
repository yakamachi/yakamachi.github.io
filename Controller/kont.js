function validateMe(){



    var contact = new ContactMe();

    var [first, last, email, phone, message] = contact;

    console.log(first)
    console.log(last)

    var constraints = {
        from: {
            email: true
        }
    };

    validate({from: email},constraints);

    return false;
}