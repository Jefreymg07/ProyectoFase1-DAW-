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
        // Aquí puedes redirigir al login si quieres
        // Por ejemplo: window.location.href = "login.html";
      });
    }
  });
});
