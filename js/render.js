import { toggleFavorite, favorites } from './favorites.js';
import { openModal } from './modal.js';

export function renderHeroes(heroes){
  const container = document.getElementById('heroContainer');
  container.innerHTML = '';

  heroes.forEach(hero => {
    const alignment = hero.biography.alignment || 'neutral';
    const card = document.createElement('div');
    card.className = `hero-card ${alignment}`;
    card.innerHTML = `
      <img src="${hero.images.md}" alt="${hero.name}">
      <h3>${hero.name}</h3>
      <button class="favorite-btn">${favorites.find(h=>h.id===hero.id)?'★':'☆'}</button>
    `;
    container.appendChild(card);

    // Toggle favorito
    card.querySelector('.favorite-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(hero);
      e.target.textContent = favorites.find(h=>h.id===hero.id)?'★':'☆';
    });

    // Abrir modal
    card.addEventListener('click', ()=> openModal(hero));
  });
}
