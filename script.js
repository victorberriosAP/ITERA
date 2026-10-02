const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", async function (e) {

    e.preventDefault();

    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          nombre: document.getElementById("nombre").value,
          email: document.getElementById("email").value,
          mensaje: document.getElementById("mensaje").value
        })

      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
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