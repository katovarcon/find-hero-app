let currentPage=1;
let itemsPerPage=20;
let totalPages=1;
let heroesList=[];

export function setupPagination(heroes){
  heroesList=heroes;
  totalPages=Math.ceil(heroes.length/itemsPerPage);
  updatePageSelect();
  updatePage();

  document.getElementById('firstPage').onclick = ()=>{currentPage=1; updatePage();}
  document.getElementById('prevPage').onclick = ()=>{if(currentPage>1) currentPage--; updatePage();}
  document.getElementById('nextPage').onclick = ()=>{if(currentPage<totalPages) currentPage++; updatePage();}
  document.getElementById('lastPage').onclick = ()=>{currentPage=totalPages; updatePage();}
  document.getElementById('pageSelect').onchange = e=>{currentPage=Number(e.target.value); updatePage();}
}

function updatePage(){
  const start = (currentPage-1)*itemsPerPage;
  const end = start + itemsPerPage;
  import('./render.js').then(module => module.renderHeroes(heroesList.slice(start,end)));
  document.getElementById('pageStatus').textContent = `Página ${currentPage} de ${totalPages}`;
}

function updatePageSelect(){
  const select = document.getElementById('pageSelect');
  select.innerHTML = '';
  for(let i=1;i<=totalPages;i++){
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    select.appendChild(opt);
  }
}
