const signUpBtn = document.querySelector('#signUpBtn')
const loginBtn = document.querySelector('#loginBtn')
const signUpPlatform = document.querySelector('#signUpPlatform')
const loginPlatform = document.querySelector('#loginPlatform')

function signup(e) {
  event.preventDefault();

  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const pass = document.querySelector('#password').value;
  var signUpResult = document.querySelector('#signUpResult');

  var user = {
    firstname: fname,
    lastname: lname,
    email: email,
    password: pass
  };

  var json = JSON.stringify(user);
  localStorage.setItem("user", json);
}

function loginFunc(e) {
  event.preventDefault();

  const email2 = document.querySelector('#email2').value;
  const pass2 = document.querySelector('#password2').value;
  var result = document.querySelector('#result');

  var userData = localStorage.getItem("user");
  var data = JSON.parse(userData);

  if (email2 == data.email && pass2 == data.password) {
    location.replace("login.html");
  } else {
    result.innerHTML = 'Wrong e-mail or password! Try again.';
  }
}

function loginPressed() {
  loginPlatform.hidden = false
}

function signUpPressed() {
  signUpPlatform.hidden = false
}

function xPressed() {
  loginPlatform.hidden = true
}

function x2Pressed() {
  signUpPlatform.hidden = true
}
