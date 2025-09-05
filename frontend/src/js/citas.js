import { crearCita, getCitas, eliminarCita } from './apiCitas.js';

const formAgendar = document.querySelector('#formAgendar');
const tbodyListar = document.querySelector('#tbodyListar');
const tbodyCancelar = document.querySelector('#tbodyCancelar');

window.selectedCita = null;

// --- Agendar ---
if(formAgendar){
  formAgendar.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fecha = document.getElementById('fechaCita').value;
    const hora = document.getElementById('horaCita').value;
    const especialidad = document.getElementById('especialidadCita').value;
    const medico = document.getElementById('medicoCita').value;

    try{
      await crearCita(fecha, hora, especialidad, medico);
      alert('✅ Cita agendada correctamente');
      formAgendar.reset();
      cargarCitas();
    } catch(err){
      console.error(err);
      alert('❌ Error al agendar la cita');
    }
  });
}

// --- Listar / Cancelar ---
export async function cargarCitas(){
  try{
    const citas = await getCitas();
    if(tbodyListar) tbodyListar.innerHTML = '';
    if(tbodyCancelar) tbodyCancelar.innerHTML = '';

    citas.forEach(c => {
      // Listar
      if(tbodyListar){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="p-3">${c.fecha}</td><td class="p-3">${c.hora}</td><td class="p-3">${c.especialidad}</td><td class="p-3">${c.medico}</td>`;
        tbodyListar.appendChild(tr);
      }

      // Cancelar
      if(tbodyCancelar){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="p-3"><input type="radio" name="cita" value="${c.id}" onclick="window.selectedCita=${c.id}"></td>
                        <td class="p-3">${c.fecha}</td><td class="p-3">${c.hora}</td><td class="p-3">${c.especialidad}</td><td class="p-3">${c.medico}</td>`;
        tbodyCancelar.appendChild(tr);
      }
    });
  } catch(err){
    console.error(err);
  }
}

// --- Cancelar ---
export async function cancelarCita(){
  if(!window.selectedCita){
    alert('⚠️ Selecciona una cita primero');
    return;
  }
  try{
    await eliminarCita(window.selectedCita);
    alert('❌ Cita cancelada exitosamente');
    window.selectedCita = null;
    cargarCitas();
  } catch(err){
    console.error(err);
    alert('❌ Error al cancelar la cita');
  }
}

// Exponer globalmente
window.cargarCitas = cargarCitas;
window.cancelarCita = cancelarCita;

cargarCitas();
