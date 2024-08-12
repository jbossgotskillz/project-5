//login validation

  const forms = document.querySelectorAll('.needs-validation');
  for ( let form of forms ) {
      form.addEventListener( 'submit', event => {
          if (! event.target.checkValidity() ) {
              event.preventDefault();
              event.stopPropagation();          
          }
          event.target.classList.add('was-validated');
      });
  }

function registrationAccess() {

    let checkbox = document.getElementById('tc-checkbox');
    let checkbox_text = document.getElementById('agree');
    let username = document.getElementById('username');
    let username_text = document.getElementById('username-text');
    let email = document.getElementById('email');
    let email_text = document.getElementById('email-text');
    let password = document.getElementById('password');
    let password_text = document.getElementById('password-text');
    let confirm_password = document.getElementById('confirm-password');
    let confirm_password_text = document.getElementById('confirm-password-text');

    if(checkbox.checked) {
        checkbox_text.innerHTML = "Thank you for accepting the terms and conditions, player";
    } else {
        checkbox_text.innerHTML = "You need to accept the terms and conditions, player";
    }

    if(!username.checkValidity()) {
        username_text.innerHTML = "Your username is required, player"
    } else {
        username_text.innerHTML = "Well done.  Now get ready to suit up"
    }

    if(!email.checkValidity()) {
        email_text.innerHTML = "Your email is required, player"
    } else {
        email_text.innerHTML = "Well done.  Now get ready to suit up"
    }
    
    if(!password.checkValidity()) {
        password_text.innerHTML = "Your password is required, player"
    } else {
        password_text.innerHTML = "Well done.  Now get ready to suit up"
    }

    if(confirm_password.value != password.value) {
        confirm_password_text.innerHTML = "Your password is not confirmed, player."
    } else {
        confirm_password_text.innerHTML = "Well done.  Now get ready to suit up."
    }
}

function loginAccess() {

    let username = document.getElementById('username');
    let username_text = document.getElementById('username-text');
    let password = document.getElementById('password');
    let password_text = document.getElementById('password-text');

    if(!username.checkValidity()) {
        username_text.innerHTML = "Your username is required, player"
    } else {
        username_text.innerHTML = "Well done.  Now get ready to suit up"
    }
    
    if(!password.checkValidity()) {
        password_text.innerHTML = "Your password is required, player"
    } else {
        password_text.innerHTML = "Well done.  Now get ready to suit up"
    }
}