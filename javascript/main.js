document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document
  .getElementById("WelcomeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = "Hello There, " + name + "!";
    welcomeMessage.style.display = "block";
    document.getElementById("name").value = ""; // Clear the input field
  });

document
  .getElementById("TellForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var info = document.getElementById("info").value;
    var infoMessage = document.getElementById("infoMessage");
    infoMessage.innerHTML = "Ohhh thanks for telling me! ;)";
    infoMessage.style.display = "block";
    document.getElementById("info").value = ""; // Clear the input field
  });

function checkTruth(element) {
  element.style.textDecoration = "line-through";
  element.style.color = "red";
}

function checkLie(element) {
  element.style.color = "green";
}
