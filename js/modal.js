const modal = document.getElementById('heroModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

export function openModal(hero) {
  const alignment = hero.biography.alignment || "neutral";

  modalContent.className = `modal-content ${alignment}`;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-poster">
        <img src="${hero.images.lg}" alt="${hero.name}">
      </div>

      <div class="modal-info">
        <h2>${hero.name}</h2>
        <p><strong>Nombre real:</strong> ${hero.biography.fullName || "Desconocido"}</p>
        <p><strong>Publisher:</strong> ${hero.biography.publisher || "N/A"}</p>
        <p><strong>Alianza:</strong> ${hero.biography.alignment}</p>
        <p><strong>Conexiones:</strong> ${hero.connections.groupAffiliation || "N/A"}</p>

        <h3>Power Stats</h3>
        <div class="stats">
          ${Object.entries(hero.powerstats).map(([stat, value]) => `
            <div class="stat">
              <span>${stat}</span>
              <div class="bar">
                <div style="width:${value || 0}%"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});
