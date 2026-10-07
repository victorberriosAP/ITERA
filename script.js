/*
const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function () {
    
    
    
    const modalElement = document.getElementById("successModal");

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
    form.reset();
    

  });

}
*/
const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function () {


const modalElement = document.getElementById("successModal");

if (modalElement) {
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

setTimeout(() => {
  form.reset();
}, 500);


});

}

//Mostrar codigos desde txt
/*
function mostrarCodigo(archivo, boton) {

  const contenedor = boton.nextElementSibling;
  const codigo = contenedor.querySelector("code");

  if (!contenedor.classList.contains("d-none")) {

    contenedor.classList.add("d-none");

    boton.innerHTML =
      '<i class="bi bi-code-slash me-1"></i> Ver código';

    return;

  }
*/
// Mostrar códigos desde txt

function mostrarCodigo(archivo, boton) {

  const contenedor = boton.nextElementSibling;
  const codigo = contenedor.querySelector("code");

  if (!contenedor.classList.contains("d-none")) {
    return;
  }

  fetch(archivo)
    .then(response => response.text())
    .then(texto => {

      codigo.textContent = texto;

      contenedor.classList.remove("d-none");

    })
    .catch(error => {

      codigo.textContent = "No se pudo cargar el código.";

      contenedor.classList.remove("d-none");

    });
}


// Ocultar código

function ocultarCodigo(boton) {

  const contenedor = boton.closest(".mt-3");

  contenedor.classList.add("d-none");

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

//Animacion pestaña Navegador
const textoTitulo = "ITERA  IMAGINA · DESARROLLA · IMPLEMENTA  ";
let posicion = 0;

setInterval(() => {
  document.title =
    textoTitulo.substring(posicion) +
    textoTitulo.substring(0, posicion);

  posicion++;

  if (posicion >= textoTitulo.length) {
    posicion = 0;
  }
}, 250);