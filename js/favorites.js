export let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export function toggleFavorite(hero){
  const index = favorites.findIndex(h=>h.id===hero.id);
  if(index>-1) favorites.splice(index,1);
  else favorites.push(hero);
  localStorage.setItem('favorites',JSON.stringify(favorites));
  renderFavorites();
}

export function renderFavorites(){
  const container = document.getElementById('favoritesContainer');
  container.innerHTML = '';
  favorites.forEach(hero=>{
    const card = document.createElement('div');
    card.className='hero-card';
    card.innerHTML=`
      <img src="${hero.images.md}" alt="${hero.name}">
      <h3>${hero.name}</h3>
      <button onclick="removeFav(${hero.id})">★</button>
    `;
    container.appendChild(card);
  });
}

window.removeFav = function(id){
  const index = favorites.findIndex(h=>h.id===id);
  if(index>-1) favorites.splice(index,1);
  localStorage.setItem('favorites',JSON.stringify(favorites));
  renderFavorites();
};
