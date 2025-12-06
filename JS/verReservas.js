const contenedor = document.getElementById("contenedorReservas");

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

if(reservas.length === 0){
    contenedor.innerHTML = "<p>No tienes reservas aún.</p>";
} else {
    reservas.forEach(reserva => {
        const div = document.createElement("div");
        div.className = reserva.tipoCancha === "Cesped" ? "canchaCesped" : "canchaCemento";
        div.innerHTML = `
            <p>CANCHA Nº${reserva.nroCancha}</p>
            <p>TIPO: ${reserva.tipoCancha}</p>
            <p>FECHA: ${reserva.fecha}</p>
            <p>HORA: ${reserva.horaInicio} - ${reserva.horaFin}</p>
        `;
        contenedor.appendChild(div);
    });
}