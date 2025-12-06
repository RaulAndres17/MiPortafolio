document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.querySelector('input[name="user"]').value;
    const pass = document.querySelector('input[name="pass"]').value;

    const datosGuardados = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (datosGuardados === null) {
        alert("No hay usuarios registrados");
        return;
    }

    if (user === datosGuardados.usuario && pass === datosGuardados.contrasena) {
        alert("Iniciaste sesión correctamente");
        window.location.href = "../HTML/usuario.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
