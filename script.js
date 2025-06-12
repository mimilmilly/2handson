document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  let isValid = true;

  // Clear previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Validate email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter email";
    emailError.style.display = "block";
    isValid = false;
  }

  // Validate password
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Please enter password";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful");
  }
});

// Modal functionality
const modal = document.getElementById("modal");
const forgotLink = document.getElementById("forgot-password-link");
const closeBtn = document.querySelector(".close-btn");
const sendResetBtn = document.getElementById("send-reset");

forgotLink.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

sendResetBtn.addEventListener("click", () => {
  const resetEmail = document.getElementById("reset-email").value;
  if (resetEmail.trim() !== "") {
    alert(`A reset link has been sent to ${resetEmail}`);
    modal.style.display = "none";
  } else {
    alert("Please enter your email.");
  }
});
