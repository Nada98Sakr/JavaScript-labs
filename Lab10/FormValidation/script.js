const form = document.querySelector(".form");
const card = document.querySelector(".container");
const userEmail = document.querySelector("#input-email");
const password = document.querySelector("#pass-input");
const submitBtn = document.querySelector("#submit-btn");
const specialText = document.querySelector(".special-text");
const Message = document.querySelector(".Message");

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

userEmail.style.height = "2.1rem";
userEmail.style.padding = "5px";
userEmail.style.width = "100%";

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
  const uEmail = userEmail.value;
  const uPassword = password.value;
  if (uEmail === "nada@gmail.com" && uPassword === "Nada98Nd") {
    Message.innerHTML = "Loged In"
    Message.style.display = "block"
    form.style.opacity = "0.5"
  } else {
    Message.innerHTML = "This account is not registered!!";
    Message.style.display = "block"
    form.style.opacity = "0.5";
  }
});