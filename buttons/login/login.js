function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (username === savedUsername && password === savedPassword) {
    document.getElementById("loginMessage").innerText =
      "Successfully Logged In! Welcome To Fragment Development Studios!";
  } else {
    document.getElementById("loginMessage").innerText =
      "Invalid username or password. Please try again.";
  }
}
