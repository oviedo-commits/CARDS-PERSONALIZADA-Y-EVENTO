document.getElementById("btnContacto").addEventListener("click", function() {
  const info = document.getElementById("contacto");
  info.classList.toggle("info-visible");

  this.textContent = info.classList.contains("info-visible") ? "Ocultar Contacto" : "Ver Contacto";
});
