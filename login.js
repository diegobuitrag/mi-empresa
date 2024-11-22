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
