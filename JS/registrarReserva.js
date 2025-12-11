document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    // Obtenemos los datos del formulario
    const reserva = {
        nroCancha: document.querySelector('input[name="NroCancha"]').value,
        horaInicio: document.querySelector('input[name="horaInicio"]').value,
        horaFin: document.querySelector('input[name="horaFin"]').value,
        fecha: document.querySelector('input[name="fecha"]').value
    };

    // Traemos las reservas existentes
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Añadimos la nueva reserva
    reservas.push(reserva);

    // Guardamos todo de nuevo
    localStorage.setItem("reservas", JSON.stringify(reservas));

    alert(" Reserva registrada correctamente");
    
    // Limpiamos el formulario
    e.target.reset();
});
