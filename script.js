(() => {
  // Highlight current page in the top-level nav items
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  // Add active to any link that matches current page
  document.querySelectorAll('a[href]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) a.classList.add('active');
  });

  // Dropdown behavior (click to toggle, click outside to close)
  const dropdowns = document.querySelectorAll('.dropdown');

  function closeAll() {
    dropdowns.forEach(d => d.classList.remove('open'));
  }

  dropdowns.forEach(d => {
    const btn = d.querySelector('.dropbtn');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = d.classList.contains('open');
      closeAll();
      if (!isOpen) d.classList.add('open');
    });
  });

  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
})();