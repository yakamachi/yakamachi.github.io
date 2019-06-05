window.addEventListener("load",function() {
    document.getElementById('my-form').addEventListener("submit",function(e) {
      e.preventDefault(); // before the code
      /* do what you want with the form */
        a = document.getElementById('first').value
        b = document.getElementById('last').value
        c = document.getElementById('email').value
        d = document.getElementById('phone').value
        e = document.getElementById('message').value
        
        contact = new ContactMe(a,b,c,d,e)

        var yup = validateMe(contact)

      // Should be triggered on form submit
      if(yup === false)
        alert('hi');
    });
  });

function validateMe(contact){

    console.log(contact.first)
    console.log(contact.last)

    var constraints = {
        from: {
            email: true
        }
    };

    var check = validate({from: contact.email},constraints);

    if(check[0] === "From is not a valid email")
        return false;
    else
        return true;
}