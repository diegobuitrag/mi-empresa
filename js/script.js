document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;

    
    const usuario = {
        nombres,
        apellidos,
        correo,
        contrasena,
        genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    document.getElementById('mensaje').textContent = '¡Registro exitoso! Puedes iniciar sesión ahora.';
    document.getElementById('mensaje').classList.add('success');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const correoLogin = document.getElementById('correoLogin').value;
    const contrasenaLogin = document.getElementById('contrasenaLogin').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado && usuarioGuardado.correo === correoLogin && usuarioGuardado.contrasena === contrasenaLogin) {
        document.getElementById('mensajeLogin').textContent = '¡Inicio de sesión exitoso!';
        document.getElementById('mensajeLogin').classList.add('success');
        localStorage.setItem('usuarioSesion', JSON.stringify(usuarioGuardado)); 
        setTimeout(() => {
            window.location.href = 'bienvenida.html';
        }, 1500);
    } else {
        document.getElementById('mensajeLogin').textContent = 'Correo o contraseña incorrectos';
        document.getElementById('mensajeLogin').classList.remove('success');
    }
});
