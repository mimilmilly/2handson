document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value.trim();
  const password = e.target[1].value.trim();

  if (email && password) {
    alert("Login Successful");
  } else {
    alert("Please fill in all fields.");
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
    if (resetEmail) {
      alert(`A reset link has been sent to ${resetEmail}`);
      modal.style.display = "none";
    } else {
      alert("Please enter your email.");
    }
  });
  
