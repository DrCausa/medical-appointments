export async function getUsuarios() {
  const res = await fetch('http://localhost:4000/api/usuarios');
  const data = await res.json();
  console.log(data); // verás { error: false, status: 200, body: [...] }
}

export async function getUsuario(id) {
  const res = await fetch(`http://localhost:4000/api/usuarios/${id}`);
  const data = await res.json();
  console.log(data);
}

export async function crearUsuario(nombre, email, contra) {
  const res = await fetch('http://localhost:4000/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 0,       // 0 indica "nuevo"
      nombre,
      email,
      contra
    })
  });

  const data = await res.json();
  console.log(data);
}

export async function eliminarUsuario(id) {
  const res = await fetch('http://localhost:4000/api/usuarios', {
    method: 'PUT',   // según tu ruta usas PUT para eliminar
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  });

  const data = await res.json();
  console.log(data);
}