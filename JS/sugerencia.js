document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formSugerencias");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que se recargue la página
        alert("Sugerencia enviada, muchas gracias :)");
        formulario.reset(); // Limpia el formulario después del envío
    });
});
