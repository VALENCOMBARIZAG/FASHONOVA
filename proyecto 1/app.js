document.getElementById("c3").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("Nombre").value;
    let email = document.getElementById("Correo").value;
    let mensaje = document.getElementById("Mensaje").value;

    if (email.indexOf("@") === -1) {
        alert("Por favor ingresa un correo válido.");
    } else {
        alert("Los datos guardados son:\nNombre: " + nombre + "\nCorreo: " + email + "\nMensaje: " + mensaje)
    }
});