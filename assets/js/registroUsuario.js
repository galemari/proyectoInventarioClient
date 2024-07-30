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
      // Aquí puedes continuar con el envío del formulario
      // this.submit(); // Descomenta esta línea si deseas enviar el formulario
  });
});
const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Logging for debugging
  console.log("Form submitted");

  const nombre = e.target.nombre.value;
  const apellido = e.target.apellido.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log("nombre:", nombre);
  console.log("apellido:", apellido);
  console.log("email:", email);
  console.log("password:", password);

  try {
    const res = await fetch("http://localhost:3000/apiV1/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, apellido, email, password }),
    });

    console.log("Response status:", res.status);

    if (!res.ok) {
      // Log the response if not ok
      console.error("Failed to register:", res.statusText);
      return mensajeError.classList.remove("escondido");
    }

    const resJson = await res.json();

    console.log("Response JSON:", resJson);

    if (resJson.redirect) {
      window.location.href = resJson.redirect;
    }
  } catch (error) {
    console.error("Error:", error);
    mensajeError.classList.remove("escondido");
  }
});

//1 conectar registro, login a base de datos, crear,editar,eliminar producto 