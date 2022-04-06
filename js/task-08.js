const $form = document.querySelector("form");

$form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wszystkie pola muszą być wypełnione!");
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  $form.reset();
}
