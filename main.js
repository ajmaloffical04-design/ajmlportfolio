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

  // Since we duplicated the items in HTML, scroll exactly half the width
  const fullW = inner.scrollWidth / 2;

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

window.addEventListener('DOMContentLoaded', () => {
  startTicker();
});
