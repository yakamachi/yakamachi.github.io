window.addEventListener("load",function() {
    document.getElementById('my-form').addEventListener("submit",function(e) {
      e.preventDefault(); // before the code
      /* do what you want with the form */
  
      // Should be triggered on form submit
      alert('hi');
    });
  });

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