document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;
    const genero = document.getElementById('genero').value;

    if (contrasena !== confirmarContrasena) {
        document.getElementById('mensaje').textContent = 'Las contraseñas no coinciden';
        document.getElementById('mensaje').classList.remove('success');
        document.getElementById('mensaje').classList.add('error');
        return;
    }

    const usuario = {
        nombres,
        apellidos,
        correo,
        contrasena,
        genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    document.getElementById('mensaje').textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    document.getElementById('mensaje').classList.add('success');
});
