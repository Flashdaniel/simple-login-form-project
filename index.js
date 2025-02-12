function formLoginValidation() {
  const form = document.forms.login;

  if (!!form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.email;
      const password = form.password;
      const confirmPassword = form.confirm;
      if (!!confirmPassword) {
        validate(confirmPassword, "confirm-invalid");
      }

      validate(email, "email-invalid");
      validate(password, "password-invalid");
    });
  }

  const forgotPassword = document.forms["forgot_password"];

  if (!!forgotPassword) {
    console.log(forgotPassword);

    forgotPassword.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.querySelector(".form_email");

      validate(email, "email-invalid");
    });
  }
}

formLoginValidation();

function validate(element, feedbackId) {
  if (!element.validity.valid) {
    const feedback = document.querySelector(`#${feedbackId}`);
    feedback.style.display = "block";

    if (element.validity.valueMissing) {
      feedback.textContent = "Please fill in the required field.";
    } else if (element.validity.typeMismatch) {
      feedback.textContent =
        "incorrect password or no user with such password.";
    }
  } else {
    const feedback = document.querySelector("#password-invalid");
    feedback.style.display = "none";
  }
}
