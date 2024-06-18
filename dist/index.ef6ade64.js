// Configuración del menú de hamburguesa
const hamburguesa = document.querySelector(".hamburguesa");
const navlinks = document.querySelector(".navigation.navlink");
if (hamburguesa && navlinks) hamburguesa.addEventListener("click", ()=>{
    navlinks.classList.toggle("active");
});
else console.error("Elementos del men\xfa de hamburguesa no encontrados en el DOM.");

//# sourceMappingURL=index.ef6ade64.js.map
