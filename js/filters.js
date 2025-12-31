import { getAllHeros } from './fetch.js';
import { renderHeroes } from './render.js';
import { setupPagination } from './paginated.js';

let allHeroesCache=[];

export function setupFilters(){
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const searchBtn = document.getElementById('searchBtn');

  const loadAllHeroes = async ()=>{
    if(allHeroesCache.length===0) allHeroesCache = await getAllHeros();
    return allHeroesCache;
  };

  const doSearch = async ()=>{
    let heroes = await loadAllHeroes();
    const query = searchInput.value.toLowerCase();
    heroes = heroes.filter(h=>h.name.toLowerCase().includes(query));
    if(sortSelect.value==='asc') heroes.sort((a,b)=>a.name.localeCompare(b.name));
    else heroes.sort((a,b)=>b.name.localeCompare(a.name));
    setupPagination(heroes);
  };

  searchInput.addEventListener('keyup', e=> { if(e.key==='Enter') doSearch(); });
  searchBtn.addEventListener('click', doSearch);
  sortSelect.addEventListener('change', doSearch);
}



