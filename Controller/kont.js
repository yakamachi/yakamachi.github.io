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

        validateMe(contact)

      // Should be triggered on form submit
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

    var check = validate({from: email},constraints);

    console.log(check);

    return false;
}