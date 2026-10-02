const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", async function (e) {


e.preventDefault();

const button = form.querySelector("button[type='submit']");

if (button) {
  button.disabled = true;
  button.textContent = "Enviando...";
}

try {

  const response = await fetch(form.action, {

    method: "POST",

    body: new FormData(form)

  });

  if (!response.ok) {
    throw new Error("No se pudo enviar el mensaje");
  }

  form.reset();

  if (button) {
    button.disabled = false;
    button.textContent = "Enviar";
  }

  const modalElement = document.getElementById("successModal");

  if (modalElement) {

    const modal = new bootstrap.Modal(modalElement);

    modal.show();

  }

} catch (error) {

  console.error(error);

  if (button) {
    button.disabled = false;
    button.textContent = "Enviar";
  }

  alert("No se pudo enviar el mensaje. Inténtalo nuevamente.");

}


});

}
