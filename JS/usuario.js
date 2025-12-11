// Obtener datos del usuario registrado
    const userData = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (userData) {
        document.getElementById("nombreUsuario").textContent = userData.usuario;
    }

    // Cuando cierre sesión NO borres el usuario registrado
    document.getElementById("cerrarSesion").addEventListener("click", function () {
        // solo si quieres borrar sesión actual, más no el usuario registrado
        // localStorage.removeItem("usuarioRegistrado");
    });