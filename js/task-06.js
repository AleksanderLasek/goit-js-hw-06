const howManySymbols = document.querySelector("input").dataset.length;

const $input = document.querySelector("input");

$input.addEventListener("blur", (event) => {
  $input.classList.remove("valid");
  $input.classList.remove("invalid");

  if (event.currentTarget.value.length == howManySymbols) {
    $input.classList.add("valid");
  } else {
    $input.classList.add("invalid");
  }
});
