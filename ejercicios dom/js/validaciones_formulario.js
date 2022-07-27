const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
  console.log($inputs);

  $inputs.forEach((input) => {
    const $spam = d.createElement("span");
    $spam.id = input.name;
    $spam.textContent = input.title;
    $spam.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $spam);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      //console.log($input, pattern);
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
