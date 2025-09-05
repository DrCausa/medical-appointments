import { crearUsuario } from './usuario.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const contra = document.getElementById('contra').value;
  const confirmContra = document.getElementById('confirmContra').value;

  if (contra !== confirmContra) {
    alert('❌ Las contraseñas no coinciden');
    return;
  }

  try {
    const resultado = await crearUsuario(nombre, email, contra);
    alert('✅ Registro exitoso');
    console.log(resultado);
    form.reset();
  } catch (err) {
    console.error('ERROR al crear usuario:', err);
    alert('❌ Ocurrió un error al registrar');
  }
});
