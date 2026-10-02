/*
const btn = document.getElementById("btnTop");

if (btn) {

  btn.style.display = "none";

  window.addEventListener("scroll", () => {

    btn.style.display = window.scrollY > 300 ? "block" : "none";

  });

  btn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}
  */
 const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const datos = {
  nombre: form.nombre.value,
  email: form.email.value,
  mensaje: form.mensaje.value
};

    try {

      const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
  body: JSON.stringify(datos)
});

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      form.reset();

      const modalElement = document.getElementById("successModal");

      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }

    } catch (error) {

      console.error(error);
      alert("No se pudo enviar el mensaje. Inténtalo nuevamente.");

    }

  });

}

/*
const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    form.reset();

    const modalElement = document.getElementById("successModal");

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

  });

}
*/

function mostrarCodigo(archivo, boton) {

  const contenedor = boton.nextElementSibling;
  const codigo = contenedor.querySelector("code");

  if (!contenedor.classList.contains("d-none")) {

    contenedor.classList.add("d-none");

    boton.innerHTML =
      '<i class="bi bi-code-slash me-1"></i> Ver código';

    return;

  }

  fetch(archivo)
    .then(response => {

      if (!response.ok) {
        throw new Error("Error HTTP " + response.status);
      }

      return response.text();

    })
    .then(texto => {

      codigo.textContent = texto;

      contenedor.classList.remove("d-none");

      boton.innerHTML =
        '<i class="bi bi-code-slash me-1"></i> Ocultar código';

    })
    .catch(error => {

      console.error(error);

      codigo.textContent = "Error al cargar el código.";

      contenedor.classList.remove("d-none");

    });

}