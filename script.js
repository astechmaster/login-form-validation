function isValidateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidatePassword(password) {
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return passwordRegex.test(password);
}
function validateForm() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");
  var password = document.getElementById("password").value;
  var passwordError = document.getElementById("passwordError");
  var isValid = true;

  // Reset errors
  passwordError.textContent = "";
  emailError.textContent = "";

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (!isValidatePassword(password)) {
    passwordError.textContent =
      "Password must be between 8 and 15 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@.#$!%*?&^)";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidateEmail(email)) {
    emailError.textContent = "Invalid email";
    isValid = false;
  }

  return isValid;
}
