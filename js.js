// Simple filter logic
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');

pills.forEach(p => {
  p.addEventListener('click', () => {
    pills.forEach(x => x.setAttribute('aria-pressed', 'false'));
    p.setAttribute('aria-pressed', 'true');
    const f = p.dataset.filter;

    cards.forEach(card => {
      const cat = card.dataset.cat;
      const show = (f === 'all') || (cat === f);
      card.style.display = show ? '' : 'none';
    });
  });
});
