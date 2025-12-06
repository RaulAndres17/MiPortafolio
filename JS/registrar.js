document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const ci = document.querySelector('input[name="ci"]').value;
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const usuario = document.querySelector('input[name="NombreUsuario"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;

    const datosUsuario = {
        ci,
        nombre,
        apellido,
        telefono,
        usuario,
        contrasena
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(datosUsuario));

    alert("Te registraste correctamente");

    window.location.href = "iniciarsesion.html";
});
