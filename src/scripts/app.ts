// Configuración del menú de hamburguesa
const hamburguesa = document.querySelector(".hamburguesa");
const navlinks = document.querySelector(".navigation.navlink");

if (hamburguesa && navlinks) {
    hamburguesa.addEventListener("click", () => {
        (navlinks as HTMLDivElement).classList.toggle("active");
    });
} else {
    console.error("Elementos del menú de hamburguesa no encontrados en el DOM.");
}