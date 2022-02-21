const modal = document.querySelector("#auth-modal");
const loginButton = document.querySelector("#login");
const closeButton = document.querySelector("#auth-modal-close");

const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const switchToSignup = document.querySelector("#switch-to-signup");
const switchToLogin = document.querySelector("#switch-to-login");

loginButton.addEventListener("click", () => {
  modal.classList.add("visible");
  document.body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  signupForm.classList.add("hide");
  loginForm.classList.remove("hide");
  document.body.style.overflow = "visible";
});

switchToSignup.addEventListener("click", () => {
  signupForm.classList.remove("hide");
  loginForm.classList.add("hide");
});
switchToLogin.addEventListener("click", () => {
  signupForm.classList.add("hide");
  loginForm.classList.remove("hide");
});
