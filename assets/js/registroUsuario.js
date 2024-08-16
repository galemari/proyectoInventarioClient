$(document).ready(function() {
  $('#register-form').on('submit', function(event) {
      event.preventDefault(); // Previene el envío del formulario

      var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      var validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      var validNombre = /^[a-zA-Z0-9._]{3,15}$/;
      var validApellido = /^[a-zA-Z0-9._]{3,15}$/;

      var email = $('#email').val();
      var password = $('#password').val();
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();

      if (!validEmail.test(email)) {
          alert('Email inválido, no se puede enviar el registro');
          return;
      }

      if (!validPassword.test(password)) {
          alert('Contraseña inválida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un dígito y un carácter especial.');
          return;
      }

      if (!validNombre.test(nombre)) {
          alert('Nombre de usuario inválido. Debe tener entre 3 y 15 caracteres y puede contener letras, números, guiones bajos y puntos.');
          return;
      }

      if (!validApellido.test(apellido)) {
          alert('Apellido de usuario inválido. Debe tener entre 3 y 15 caracteres y puede contener letras, números, guiones bajos y puntos.');
          return;
      }

      alert('Formulario válido, enviando...');
  });
});

const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = e.target.nombre.value;
  const apellido = e.target.apellido.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await fetch("http://localhost:3000/apiV1/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, apellido, email, password }),
    });

    if (res.ok) {
      // Redirigir a la página index.html si el registro fue exitoso
      window.location.href = "index.html";
    } else {
      mensajeError.classList.remove("escondido");
    }
  } catch (error) {
    console.error("Error:", error);
    mensajeError.classList.remove("escondido");
  }
});


//1 conectar registro, login a base de datos, crear,editar,eliminar producto 