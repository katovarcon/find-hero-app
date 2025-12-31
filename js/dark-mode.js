export function setupDarkMode(){
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const current = localStorage.getItem('theme') || 'light';

  if(current==='dark'){
    body.classList.add('dark');
    toggle.textContent = '☀️';
  }

  toggle.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
      toggle.textContent = '☀️';
      localStorage.setItem('theme','dark');
      body.style.backgroundColor = '#0b0c10';
      body.style.color = 'white';
    } else {
      toggle.textContent = '🌙';
      localStorage.setItem('theme','light');
      body.style.backgroundColor = '#f5f5f5';
      body.style.color = '#111';
    }
  });
}
