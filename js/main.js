// js/main.js
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu-mobile');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


//Logica de contacto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const mensaje = form.querySelector('textarea').value.trim();

    // Verificación de campos vacíos
    if (!nombre || !correo || !mensaje) {
      mostrarAlerta("Por favor completa todos los campos.", "bg-red-500");
      return;
    }

    // Mostrar mensaje de éxito
    mostrarAlerta("¡Mensaje enviado con éxito!", "bg-green-500");

    // Limpiar formulario
    form.reset();
  });

  // Función para mostrar alertas visuales
  function mostrarAlerta(texto, color) {
    const alerta = document.createElement("div");
    alerta.textContent = texto;
    alerta.className = `${color} text-white px-4 py-2 mt-4 rounded shadow`;
    form.appendChild(alerta);

    // Eliminar alerta después de 4 segundos
    setTimeout(() => {
      alerta.remove();
    }, 4000);
  }
});
