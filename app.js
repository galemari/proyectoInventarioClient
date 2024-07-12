$(document).ready(function() {
    $('#register-form').on('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        var validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        var validUsername = /^[a-zA-Z0-9._]{3,15}$/;

        var email = $('#email').val();
        var password = $('#password').val();
        var username = $('#first_name').val();

        if (!validEmail.test(email)) {
            alert('Email inválido, no se puede enviar el registro');
            return;
        }

        if (!validPassword.test(password)) {
            alert('Contraseña inválida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un dígito y un carácter especial.');
            return;
        }

        if (!validUsername.test(username)) {
            alert('Nombre de usuario inválido. Debe tener entre 3 y 15 caracteres y puede contener letras, números, guiones bajos y puntos.');
            return;
        }

        alert('Formulario válido, enviando...');
        // Aquí puedes continuar con el envío del formulario
        // this.submit(); // Descomenta esta línea si deseas enviar el formulario
    });
});
