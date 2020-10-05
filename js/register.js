var usersJson = [];
document.querySelector("#submit-button").addEventListener("click", function () {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let dob = document.getElementById("date-of-birth").value;
  let gender = document.getElementsByName("gender");
  let pass = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirm-password").value;
  let checkbox = document.getElementById("checkbox").checked;

  clearErrorMsg();
  function validate() {
    if (fname.length == 0) {
      msg = "First name field is empty";
      id = "error-fname";
      errorMsg();
    } else {
      if (fname.length <= 2) {
        msg = "Name is invalid.";
        id = "error-fname";
        errorMsg();
      } else {
      }
    }

    if (lname.length == 0) {
      msg = "Last name field is empty";
      id = "error-lname";
      errorMsg();
    } else {
    }

    if (!dob) {
      msg = "Select date of birth";
      id = "error-dob";
      errorMsg();
    } else {
    }

    if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
      msg = "Select Gender";
      id = "error-gender";
      errorMsg();
    } else {
    }

    if (pass.length == 0) {
      msg = "Password field is empty";
      id = "error-pass";
      errorMsg();
    } else {
      if (pass.length <= 8) {
        msg = "Password requires at least 8 characters";
        id = "error-pass";
        errorMsg();
      } else {
      }
    }

    if (confirmPass.length == 0) {
      msg = "Confirm password field is empty";
      id = "error-confpass";
      errorMsg();
    } else if (pass != confirmPass) {
      msg = "Does not match with password";
      id = "error-confpass";
      errorMsg();
    } else {
    }

    if (!checkbox) {
      msg = "You need to agree T&C";
      id = "error-checkbox";
      errorMsg();
    } else {
      return true;
    }
  }

  function errorMsg() {
    let error = document.getElementById(id);
    error.textContent = msg;
    error.style.color = "#ff0000";
    error.style.fontSize = "10px";
    error.style.marginBottom = "10px";
    error.style.display = "block";
  }

  function clearErrorMsg() {
    errors = document.querySelectorAll(".error-text");
    for (i = 0; i < errors.length; i++) {
      errors[i].style.display = "none";
    }
  }

  function register() {
    var user = {
      firstname: fname,
      lastname: lname,
      password: pass,
      dob: dob,
      gender: gender,
    };
    userJson = usersJson.push(user);
    var userDetails = JSON.stringify(usersJson);
    localStorage.setItem("users", userDetails);

    console.log("registered");
  }

  function popUp() {
    const popupbox = document.querySelectorAll(".hide");
    for (var each of popupbox) {
      each.style.visibility = "unset";
    }
  }

  if (validate()) {
    register();
    popUp();
  }
});
