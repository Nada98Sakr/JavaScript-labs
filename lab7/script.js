import User from "./user.js";
const form = document.querySelector(".form");
const card = document.querySelector(".container");
const userName = document.querySelector("#user-input");
const password = document.querySelector("#pass-input");
const submitBtn = document.querySelector("#submit-btn");
const specialText = document.querySelector(".special-text");
document.body.style.background = "green";
card.style.display = "flex";
card.style.justifyContent = "center";
card.style.alignItems = "center";
card.style.height = "100vh";

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.padding = "30px";
form.style.background = "white";
form.style.borderRadius = "15px";
form.style.gap = "15px";

userName.style.height = "2.1rem";
userName.style.padding = "5px";
userName.style.width = "100%";

password.style.height = "2.1rem";
password.style.padding = "5px";
password.style.width = "100%";

submitBtn.style.width = "100%";
submitBtn.style.padding = "5px";
submitBtn.style.background = "green";
submitBtn.style.height = "2.1rem";
submitBtn.style.color = "white";
submitBtn.style.cursor = "pointer";

specialText.style.color = "lightGreen";
specialText.style.cursor = "pointer";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const uName = userName.value;
  const uPassword = password.value;
  const user = new User(uName, uPassword);
  if (user._validUser()) {
    alert("Welcome");
  } else {
    alert("not registered");
  }
});
