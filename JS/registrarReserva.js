document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    // Obtener los datos del formulario
    const reserva = {
        nroCancha: document.querySelector('input[name="NroCancha"]').value,
        tipoCancha: document.querySelector('select[name="tipoCancha"]').value,
        horaInicio: document.querySelector('input[name="horaInicio"]').value,
        horaFin: document.querySelector('input[name="horaFin"]').value,
        fecha: document.querySelector('input[name="fecha"]').value
    };

    // Traer las reservas existentes del localStorage
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Añadir la nueva reserva
    reservas.push(reserva);

    // Guardar todo de nuevo
    localStorage.setItem("reservas", JSON.stringify(reservas));

    alert("✅ Reserva registrada correctamente");
    
    // Opcional: limpiar el formulario
    e.target.reset();
});
