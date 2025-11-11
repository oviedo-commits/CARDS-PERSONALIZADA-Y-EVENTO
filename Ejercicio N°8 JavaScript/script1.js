document.getElementById("btnFotos").addEventListener("click", function() {
  const galeria = document.getElementById("galeria");
  galeria.classList.toggle("info-visible");

  this.textContent = galeria.classList.contains("info-visible")
    ? "Ocultar Galería"
    : "Ver Galería";
});
