document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.querySelector('input[name="nombre"]').value.trim();
        const apellido = document.querySelector('input[name="apellido"]').value.trim();
        const ci = document.querySelector('input[name="ci"]').value.trim();
        const telefono = document.querySelector('input[name="telefono"]').value.trim();
        const usuario = document.querySelector('input[name="NombreUsuario"]').value.trim();
        const contrasena = document.querySelector('input[name="contrasena"]').value.trim();

        if(!nombre || !apellido || !ci || !telefono || !usuario || !contrasena) {
            alert("Completa todos los campos");
            return;
        }

        const datosUsuario = { ci, nombre, apellido, telefono, usuario, contrasena };
        localStorage.setItem("usuarioRegistrado", JSON.stringify(datosUsuario));

        alert(nombre + " ¡Te registraste correctamente!");
        window.location.href = "iniciarsesion.html";
    });
});
