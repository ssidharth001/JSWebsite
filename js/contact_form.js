//-----------------------------REMAINING CHARACTERS-----------------------------//
function countCharacters() {
  var textEntered, countRemaining, counter;
  textEntered = document.getElementById("description").value;
  counter = 255 - textEntered.length;
  countRemaining = document.getElementById("characters-remaining");
  countRemaining.textContent = counter;
}
document
  .getElementById("description")
  .addEventListener("keyup", countCharacters, false);

//---------------------------------ON SUMBIT------------------------------------//

document.getElementById("add-post").addEventListener("submit", addPost);
function addPost(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let description = document.getElementById("description").value;

  document
    .getElementById("name")
    .addEventListener("keyup", validate(name), false);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      subject: subject,
      phone: phone,
      email: email,
      description: description,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function validate(name) {
  if (name.length == 0) {
    msg = "Name Field is Empty!";
    const fieldError = document.querySelector("#name-error");
    const field = document.querySelector("#name");
    field.style.border = "1px solid #ff0033";
    fieldError.textContent = msg;
    fieldError.style.marginTop = "0px";
    fieldError.style.fontSize = "9px";
    return false;
  }
}
