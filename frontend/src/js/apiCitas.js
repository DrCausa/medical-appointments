const URL = 'http://localhost:4000/api/citas';

export async function getCitas(){
  const res = await fetch(URL);
  const data = await res.json();
  return data.body;
}

export async function crearCita(fecha, hora, especialidad, medico){
  const res = await fetch(URL, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ id:0, fecha, hora, especialidad, medico })
  });
  return res.json();
}

export async function eliminarCita(id){
  const res = await fetch(URL, {
    method:'PUT', // según tu backend
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ id })
  });
  return res.json();
}
