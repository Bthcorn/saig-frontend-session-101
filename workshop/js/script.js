submitButton = document.getElementById("submit-btn");

function submitForm(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  this.disabled = true;
  this.innerHTML = "Submitted!";
}

document.getElementById("submit-btn").addEventListener("click", submitForm);
