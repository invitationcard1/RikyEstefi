document.addEventListener('DOMContentLoaded', function() {
    const direccionOculta = document.getElementById('direccionOculta');
    const mensajeEspera = document.getElementById('mensajeEspera');

    // Fecha del evento: 15 de noviembre de 2025
    const fechaEvento = new Date('2025-11-15T00:00:00'); 
    
    // Calcula la fecha de revelación (1 semana antes del evento)
    // 7 días * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos
    const unaSemanaEnMilisegundos = 7 * 24 * 60 * 60 * 1000;
    const fechaRevelacion = new Date(fechaEvento.getTime() - unaSemanaEnMilisegundos);

    const fechaActual = new Date(); // La fecha y hora actuales

    if (fechaActual >= fechaRevelacion) {
        // Si ya es la fecha de revelación o después
        direccionOculta.style.display = 'block'; // Muestra la dirección
        direccionOculta.classList.remove('blureado'); // Quita el blur
        mensajeEspera.style.display = 'none'; // Oculta el mensaje
    } else {
        // Si aún no es la fecha de revelación
        direccionOculta.style.display = 'block'; // Asegúrate de que el contenedor esté visible
        direccionOculta.classList.add('blureado'); // Aplica el blur
        mensajeEspera.style.display = 'block'; // Muestra el mensaje
    }
});
// Establecer la fecha de destino
const fechaDestino = new Date("2025-11-15T21:30:00");

// Variable para almacenar el ID del intervalo
let intervalo;

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaDestino - ahora;

  if (diferencia <= 0) {
    // Detener el intervalo
    clearInterval(intervalo);

    // Asegurarse de que el contador se quede en cero
    document.getElementById("dias").textContent = 0;
    document.getElementById("horas").textContent = 0;
    document.getElementById("minutos").textContent = 0;
    document.getElementById("segundos").textContent = 0;

    // Mostrar el mensaje "LLEGÓ EL DÍA"
    document.getElementById("mensaje").style.display = "block"; // Muestra el mensaje

    return;
  }

  // Calcular días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// Actualizar cada segundo y guardar el ID del intervalo
intervalo = setInterval(actualizarContador, 1000);

// Actualizar al cargar la página
actualizarContador();
