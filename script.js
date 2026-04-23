const btn = document.getElementById("btnTop");

// ocultar inicialmente
btn.style.display = "none";

// mostrar al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// volver arriba suave
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // limpiar inputs
  form.reset();

  // mostrar modal
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
});