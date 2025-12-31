import { setupFilters } from './filters.js';
import { renderFavorites } from './favorites.js';
import { setupDarkMode } from './dark-mode.js';
import { getAllHeros } from './fetch.js';
import { renderHeroes } from './render.js';
import { setupPagination } from './paginated.js';
import './cursor.js';

document.addEventListener('DOMContentLoaded', async ()=>{
  setupDarkMode();
  renderFavorites();
  setupFilters();
  const heroes = await getAllHeros();
  renderHeroes(heroes);
  setupPagination(heroes);
});
