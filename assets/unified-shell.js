
// unified-shell.js : filtros, búsqueda y navegación estilo "portafolio unificado"
(function(){
  const grid = document.getElementById('proyectos');
  const q = document.getElementById('q');
  const filters = document.querySelectorAll('[data-filter]');
  function apply(){
    const term = (q?.value || '').toLowerCase().trim();
    const active = Array.from(filters).filter(f=>f.classList.contains('active')).map(f=>f.dataset.filter);
    document.querySelectorAll('#proyectos .card').forEach(card=>{
      const text = card.innerText.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.tags span')).map(e=>e.textContent.toLowerCase());
      const matchesTerm = !term || text.includes(term);
      const matchesFilter = active.length===0 || active.every(a=>tags.includes(a));
      card.style.display = (matchesTerm && matchesFilter) ? '' : 'none';
    });
  }
  filters.forEach(btn=>btn.addEventListener('click',()=>{ btn.classList.toggle('active'); apply(); }));
  q?.addEventListener('input', apply);

  // Navegación por tarjeta
  grid?.addEventListener('click', (e)=>{
    const a = e.target.closest('a.btn[data-proj-folder]');
    if(!a) return;
    e.preventDefault();
    const slug = a.getAttribute('data-proj-folder');
    location.href = `projects_pages/${slug}/web/index.html`;
  });
})();
