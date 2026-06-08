/* ============================================================
   J. KANE — PORTFOLIO  |  main.js (Light Theme)
   ============================================================ */

/* 1. Live Clock */
function startClock() {
  const el = document.getElementById('liveTime');
  if(!el) return;
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}
startClock();

/* 2. GSAP Infinite Marquee for Brands */
function startTicker() {
  const inner = document.getElementById('brandsInner');
  if (!inner) return;

  // Wait for images to load if they haven't already
  // Add 24px to account for the missing gap at the very end of the flex container
  const fullW = (inner.scrollWidth + 24) / 2;

  gsap.to(inner, {
    x: `-=${fullW}`,
    duration: 12,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % fullW)
    }
  });
}

window.addEventListener('load', () => {
  startTicker();
});
