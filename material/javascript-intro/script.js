let content2 = document.getElementById("content-2");
let clickButton = document.getElementById("submit-btn");
let message = document.getElementById("message");

let textHTML = "<span>Hello World</span>";
textHTML += "<p>This is a paragraph</p>";

content2.innerHTML = textHTML;

function showMessage() {
  message.innerHTML = "<span>I'm clicked!!!</span>";
}

clickButton.addEventListener("click", showMessage);
