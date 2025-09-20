//Script para SweetAlert
document.getElementById("btnSalir").addEventListener("click", () => {
  Swal.fire({
    title: "¿Desea cerrar la sesión?",
    text: "Si cierra sesión tendrá que ingresar de nuevo con su PIN.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sesión cerrada",
        text: "Ha cerrado su sesión correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        window.location.href = "login.html";
      });
    }
  });
});

// Redirección a otras páginas
document.getElementById("btnDeposito").onclick = function () {
  window.location.href = "Deposito.html";
};
document.getElementById("btnRetiro").onclick = function () {
  window.location.href = "Retiro.html";
};
document.getElementById("btnPagoServicios").onclick = function () {
  window.location.href = "PagoServicios.html";
};
document.getElementById("btnHistorial").onclick = function () {
  window.location.href = "HistorialTransacciones.html";
};
document.getElementById("btnAnalisisGrafico").onclick = function () {
  window.location.href = "AnalisisGrafico.html";
};
