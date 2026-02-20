const successMessage = document.getElementById("success-message");
const submitButton = document.getElementById("submit-btn");
const inputs = document.querySelectorAll(".input");
const inputErrors = document.querySelectorAll(".error");
const radioButtons = document.querySelectorAll(".radio-checked");
const checkbox = document.getElementById("checkbox");
const checkboxError = document.getElementById("checkbox-error");

console.log(inputs);
console.log(inputErrors);
console.log(radioButtons);

submitButton.addEventListener("click", () => {
  let isValid = true;

  inputs.forEach((input, index) => {
    if (input.value.trim() === "") {
      inputErrors[index].classList.add("name-input-error");
      isValid = false;
    } else {
      inputErrors[index].classList.remove("name-input-error");
    }
  });

  if (!radioButtons[0].checked && !radioButtons[1].checked) {
    inputErrors[3].classList.add("name-input-error");
    isValid = false;
  } else {
    inputErrors[3].classList.remove("name-input-error");
  }

  if (inputs[3].value === "") {
    inputErrors[4].classList.add("name-input-error");
    isValid = false;
  } else {
    inputErrors[4].classList.remove("name-input-error");
  }

  if (!checkbox.checked) {
    checkboxError.classList.add("checkbox-error");
    isValid = false;
  } else {
    checkboxError.classList.remove("checkbox-error");
  }

  if (!isValid) return;

  successMessage.classList.add("success");

  setTimeout(() => {
    successMessage.classList.remove("success");
  }, 4000);
});
