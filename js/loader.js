export function setupLoader() {
    const container = document.getElementById('heroContainer');
    const observer = new MutationObserver(() => {
      container.querySelectorAll('.hero-card').forEach(card => card.classList.add('animate-comic-pop'));
    });
    observer.observe(container,{childList:true});
  }
  