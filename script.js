document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      responseMessage.textContent = "Please fill in all fields.";
      responseMessage.style.color = "red";
      return;
    }

    responseMessage.textContent = "Message sent successfully!";
    responseMessage.style.color = "green";

    form.reset();
  });
});
