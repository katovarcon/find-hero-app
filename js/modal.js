const modal = document.getElementById('heroModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

export function openModal(hero){
  modalContent.innerHTML = `
    <h2>${hero.name}</h2>
    <img src="${hero.images.md}" style="width:100%;height:auto;margin:10px 0">
    <p><strong>Nombre completo:</strong> ${hero.biography.fullName || 'Desconocido'}</p>
    <p><strong>Conexiones:</strong> ${hero.connections.groupAffiliation || 'N/A'}</p>
    <h3>Stats:</h3>
    ${Object.keys(hero.powerstats).map(stat=>`
      <p>${stat}: ${hero.powerstats[stat]}</p>
    `).join('')}
  `;
  modal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', ()=> modal.classList.add('hidden'));
modal.addEventListener('click', e=> { if(e.target===modal) modal.classList.add('hidden'); });
