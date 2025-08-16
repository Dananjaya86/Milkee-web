// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const input = document.getElementById("commandInput");
    const output = document.getElementById("output");

    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        let command = input.value.trim();
        input.value = "";

        if (command.toLowerCase() === "help") {
          output.innerText += "\nAvailable commands:\n- help\n- about\n- clear";
        } else if (command.toLowerCase() === "about") {
          output.innerText += "\nMilkee Foods Products - Since 2001";
        } else if (command.toLowerCase() === "clear") {
          output.innerText = "Console cleared.";
        } else {
          output.innerText += "\nUnknown command: " + command;
        }

        output.scrollTop = output.scrollHeight; // auto scroll down
      }
    });