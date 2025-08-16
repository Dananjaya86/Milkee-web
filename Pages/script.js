
(() => {
  'use strict'

  
  const forms = document.querySelectorAll('.needs-validation')

  
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

        output.scrollTop = output.scrollHeight;
    } 
    });

     document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const addBtn = document.getElementById("addProduct");
  const productSelect = document.getElementById("product");
  const quantityInput = document.getElementById("quantity");
  const orderList = document.getElementById("orderList");
  const deliveryForm = document.getElementById("deliveryForm");

  // Add product to order list
  addBtn.addEventListener("click", function () {
    const product = productSelect.value;
    const qty = quantityInput.value;

    if (qty > 0) {
      const li = document.createElement("li");
      li.textContent = `${product} - Quantity: ${qty}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌ Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", () => li.remove());

      li.appendChild(removeBtn);
      orderList.appendChild(li);

      quantityInput.value = 1;
    } else {
      alert("Please enter a valid quantity.");
    }
  });

  // Handle form submission
  deliveryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Delivery submitted successfully!");
    // Optionally clear form
    deliveryForm.reset();
    orderList.innerHTML = "";
  });
});
