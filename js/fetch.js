const url = 'https://akabab.github.io/superhero-api/api/all.json';

export const getAllHeros = async () => {
  try {
    const response = await fetch(url);
    if(!response.ok) throw new Error('No se ha obtenido respuesta');
    const data = await response.json();
    return Array.isArray(data) ? data : data.results;
  } catch(err) {
    console.error(err);
    return [];
  }
};
