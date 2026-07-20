// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

// ===== Solutions data + icons (inline SVG, stroke-based, brand line style) =====
const solutions = [
  {
    title: "Automatización y domótica",
    text: "Control inteligente de iluminación, clima y accesos para hogares y edificios.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M9.5 20v-5.5h5V20"/><circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Redes LAN/WAN",
    text: "Conectividad empresarial robusta y escalable para cada punto de tu operación.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2V13m0 0-5.5 4.3M12 13l5.5 4.3"/></svg>`
  },
  {
    title: "Fibra óptica y cableado",
    text: "Infraestructura de cableado estructurado pensada para el largo plazo.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17c4-6 6 6 10 0s6 6 8 0"/><circle cx="4" cy="17.3" r="1.1" fill="currentColor" stroke="none"/><circle cx="20" cy="17" r="1.1" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Seguridad electrónica y videovigilancia",
    text: "Alarmas y cámaras que protegen tu propiedad las 24 horas.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="8" width="12" height="8" rx="2"/><path d="M14.5 10.3 21 7v10l-6.5-3.3"/></svg>`
  },
  {
    title: "Control de accesos biométricos",
    text: "Ingreso seguro con huella y automatización de portones vehiculares.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a5 5 0 0 0-5 5c0 4 1 6-1 10"/><path d="M12 2a5 5 0 0 1 5 5c0 1.5-.1 2.7-.3 3.7"/><path d="M8.5 21c1-2 1.5-4 1.5-7a2 2 0 1 1 4 0c0 1.6-.1 2.7-.4 3.7"/><path d="M12 12.5c0 3-.4 5.2-1.6 8"/></svg>`
  },
  {
    title: "Infraestructura IT y data centers",
    text: "Servidores, racks y soluciones para operaciones críticas de datos.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3.5" width="16" height="6" rx="1.4"/><rect x="4" y="14.5" width="16" height="6" rx="1.4"/><circle cx="7.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/><circle cx="7.5" cy="17.5" r=".9" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Ciberseguridad",
    text: "Protección de sistemas y datos frente a amenazas digitales.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    title: "Electricidad industrial y eficiencia energética",
    text: "Instalaciones eléctricas seguras que optimizan el consumo.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>`
  },
  {
    title: "Aire acondicionado técnico",
    text: "Instalación y mantenimiento de climatización para espacios exigentes.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v20M4.5 6 19.5 18M19.5 6 4.5 18"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>`
  }
];

const grid = document.getElementById('solutionsGrid');
grid.innerHTML = solutions.map(s => `
  <article class="solution-card">
    <span class="solution-icon">${s.icon}</span>
    <h3>${s.title}</h3>
    <p>${s.text}</p>
  </article>
`).join('');

// ===== Hero network animation (lightweight canvas) =====
(function heroNetwork(){
  const container = document.getElementById('heroNetwork');
  if (!container) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let w, h, dpr;
  let nodes = [];
  const NODE_COUNT_BASE = 46;
  const LINK_DIST = 150;
  const COLORS = ['rgba(43,172,226,', 'rgba(255,98,4,', 'rgba(255,255,255,'];

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = container.clientWidth;
    h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(18, Math.round((w * h) / 26000));
    nodes = Array.from({length: Math.min(count, NODE_COUNT_BASE)}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.6 + 1,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
    }
    for (let i = 0; i < nodes.length; i++){
      for (let j = i + 1; j < nodes.length; j++){
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < LINK_DIST){
          const alpha = (1 - dist / LINK_DIST) * 0.16;
          ctx.strokeStyle = `rgba(120,150,220,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes){
      ctx.beginPath();
      ctx.fillStyle = n.c + '0.75)';
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize);
  step();
})();

// ===== Sticky header shadow on scroll =====
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8 ? '0 8px 24px -18px rgba(6,14,54,.5)' : 'none';
}, { passive: true });
