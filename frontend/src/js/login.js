import { loginUsuario } from './usuario.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const contra = document.getElementById('contra').value;

  try {
    const usuario = await loginUsuario(email, contra);

    if (usuario && usuario.id) {
      alert(`✅ Bienvenido ${usuario.nombre}`);
      console.log(usuario);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      window.location.href = '/';
    } else {
      alert('❌ Credenciales incorrectas');
    }
  } catch (err) {
    console.error('ERROR al iniciar sesión:', err);
    alert('❌ Ocurrió un error al iniciar sesión');
  }
});
