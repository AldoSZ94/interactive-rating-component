import "./style.css";

// Elementos del DOM.
const form = document.querySelector("#form");
const ratingLayout = document.querySelector("#rating-layout");
const ratingBtns = document.querySelectorAll("[data-rating]");
const gratitudeLayout = document.querySelector("#gratitude-layout");
const ratingMessage = document.querySelector("#rating-selected");

// Estado de la app.
let selectedRating = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    debugger;
    const isSelected = btn.getAttribute("aria-pressed") === "true";

    // Reinicia todos los botones.
    ratingBtns.forEach((ratingBtn) => {
      ratingBtn.classList.remove("bg-orange-500", "text-gray-900");
      ratingBtn.setAttribute("aria-pressed", "false");
    });

    // Si ya estaba seleccionado, lo deselecciona.
    if (isSelected) {
      selectedRating = null;
      ratingMessage.textContent = "You selected 0 out of 5";
      return;
    }

    // Activa el botón seleccionado.
    btn.classList.add("bg-orange-500", "text-gray-900");
    btn.setAttribute("aria-pressed", "true");

    // Guarda el estado real.
    selectedRating = btn.dataset.rating;

    // Actualiza el mensaje.
    ratingMessage.textContent = `You selected ${selectedRating} out of 5`;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validación: si no hay rating, no hace nada.
  if (!selectedRating) return;

  // Cambia a pantalla de agradecimiento.
  ratingLayout.hidden = true;
  gratitudeLayout.hidden = false;
});
