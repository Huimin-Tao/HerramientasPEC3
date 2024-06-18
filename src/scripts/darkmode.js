import Darkmode from 'darkmode-js';

// Configuración del botón de toggle para cambiar entre el modo claro y oscuro
// Opciones para configurar darkmode-js
var options = {
    bottom: '32px', // posición desde abajo
    right: '32px', // posición desde la derecha
    time: '0.5s', // velocidad de la transición
    mixColor: '#fff', // color intermedio
    backgroundColor: '#fff',  // color de fondo predeterminado
    buttonColorDark: '#100f2c',  // color del botón en modo oscuro
    buttonColorLight: '#fff', // color del botón en modo claro
    saveInCookies: true, // guarda la preferencia en cookies
    label: '🌓' // etiqueta del botón
  };

// Inicializar Darkmode con las opciones
new Darkmode(options).showWidget();
