function signup() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  if (!username || !password) {
    document.getElementById("signupMessage").innerText =
      "Please enter both username and password.";
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  document.getElementById("signupMessage").innerText =
    "You Signed Up! Login to view your account.";
}
