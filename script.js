// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contacto (siempre Julio Colman) =====
const CONTACT = { name: "Julio Colman", phone: "595992011205", email: "jcolman@griwtech.com.py" };
const WHATSAPP_MESSAGE = "Hola Griwtech, quiero más información sobre sus soluciones.";
const EMAIL_SUBJECT = "Consulta desde la web";

document.querySelectorAll('.js-whatsapp').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const url = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener');
  });
});

document.querySelectorAll('.js-email').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
  });
});

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
    title: "Servicios generales y Facility Management",
    items: [
      "Mantenimiento general de instalaciones",
      "Electricidad, climatización y servicios técnicos",
      "Coordinación y supervisión de proveedores",
      "Mantenimiento preventivo y correctivo"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>`
  },
  {
    title: "Domótica y automatización inteligente",
    items: [
      "Diseño de automatizaciones a medida",
      "Control de iluminación, climatización, cortinas y accesos",
      "Salas y espacios corporativos inteligentes",
      "Integración de sistemas en una sola plataforma",
      "Para viviendas, edificios y empresas"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M9.5 20v-5.5h5V20"/><circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Seguridad electrónica y control de acceso",
    items: [
      "CCTV y videovigilancia inteligente",
      "Control de acceso y biometría",
      "Videoporteros y gestión de visitantes",
      "Alarmas y sistemas de seguridad"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="8" width="12" height="8" rx="2"/><path d="M14.5 10.3 21 7v10l-6.5-3.3"/></svg>`
  },
  {
    title: "Refrigeración y climatización",
    items: [
      "Venta e instalación de aires acondicionados",
      "Mantenimiento preventivo y correctivo",
      "Climatización para oficinas y centros de datos",
      "Automatización y control de climatización"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v20M4.5 6 19.5 18M19.5 6 4.5 18"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Ciberseguridad",
    items: [
      "Firewall y seguridad perimetral",
      "Protección de redes y endpoints",
      "Backup y continuidad de la información",
      "Evaluación, capacitación y buenas prácticas"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    title: "Equipamiento tecnológico",
    items: [
      "PCs, notebooks y tablets",
      "Servidores y equipamiento empresarial",
      "Suministro e instalación",
      "Renovación tecnológica"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>`
  },
  {
    title: "PCI — Protección contra incendios y alarmas",
    items: [
      "Detección y alarma de incendios",
      "Sistemas de extinción",
      "Diseño y adecuación de sistemas PCI",
      "Cumplimiento normativo"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c1.2 3 4 4.2 4 7.8a4 4 0 0 1-8 0c0-1.6.6-2.6 1.2-3.2.2 1 .9 1.6 1.4 1.6-.4-2.2 0-4.4 1.4-6.2Z"/></svg>`
  },
  {
    title: "Infraestructura tecnológica",
    items: [
      "Cableado estructurado y fibra óptica",
      "Redes LAN y WiFi empresarial",
      "Switching, routing y seguridad de red",
      "Racks, data centers y microdata centers",
      "Implementación y mantenimiento IT"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3.5" width="16" height="6" rx="1.4"/><rect x="4" y="14.5" width="16" height="6" rx="1.4"/><circle cx="7.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/><circle cx="7.5" cy="17.5" r=".9" fill="currentColor" stroke="none"/></svg>`
  },
  {
    title: "Electricidad y energía continuada",
    items: [
      "Instalaciones y adecuaciones eléctricas",
      "Tableros eléctricos y distribución",
      "UPS y sistemas de respaldo energético",
      "Mantenimiento de infraestructura eléctrica",
      "Energía solar y eficiencia energética"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>`
  },
  {
    title: "Soluciones SaaS y software",
    items: [
      "Digitalización y gestión documental",
      "Almacenamiento y servicios en la nube",
      "Facturación electrónica y punto de venta",
      "CRM y sistemas de gestión empresarial",
      "Soluciones de software especializadas"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 18a4 4 0 0 1-.5-8A5 5 0 0 1 16.5 9.5 3.5 3.5 0 0 1 16.5 18H7Z"/></svg>`
  },
  {
    title: "Outsourcing y soporte técnico",
    items: [
      "Personal técnico tercerizado",
      "Help Desk y soporte IT",
      "Soporte en sitio y remoto",
      "Cobertura operativa según necesidad"
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6.5" rx="1.5"/><rect x="17.5" y="13" width="4" height="6.5" rx="1.5"/><path d="M20 19.5v.3a3 3 0 0 1-3 3h-4"/></svg>`
  }
];

const grid = document.getElementById('solutionsGrid');
grid.innerHTML = solutions.map(s => `
  <article class="solution-card reveal">
    <span class="solution-icon">${s.icon}</span>
    <h3>${s.title}</h3>
    <ul class="solution-list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
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

// ===== Reduced motion flag =====
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Marquee / ticker (calm infinite scroll) =====
(function marquee(){
  const el = document.getElementById('marquee');
  if (!el) return;
  const items = [
    "Automatización & Domótica",
    "Redes LAN / WAN",
    "Fibra óptica & cableado estructurado",
    "Seguridad electrónica",
    "Videovigilancia 24/7",
    "Control de accesos biométricos",
    "Infraestructura IT & Data Centers",
    "Ciberseguridad",
    "Eficiencia energética",
    "Aire acondicionado técnico"
  ];
  const one = items.map(t => `<span class="marquee-item">${t}</span>`).join('');
  const track = document.createElement('div');
  track.className = 'marquee-track';
  // duplicate the sequence so the loop is seamless (-50% keyframe)
  track.innerHTML = one + one;
  el.appendChild(track);
})();

// ===== Scroll reveal (IntersectionObserver + stagger) =====
(function scrollReveal(){
  if (REDUCE_MOTION) return;

  // stagger children within these containers
  document.querySelectorAll('.hero-inner, .solutions-grid, .enfoque-grid').forEach(group => {
    group.querySelectorAll(':scope > .reveal').forEach((el, i) => {
      el.style.transitionDelay = (i * 80) + 'ms';
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// ===== Hero stats count-up =====
(function countUp(){
  if (REDUCE_MOTION) return;
  const dts = document.querySelectorAll('.hero-stats dt');

  const animate = (el) => {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\d+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1], 10);
    const suffix = m[2] || '';
    if (target <= 1) return;                 // nothing to count for "1"
    const duration = 1200;
    const startTime = performance.now();
    el.textContent = '0' + suffix;
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);  // ease-out cubic
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  dts.forEach(el => io.observe(el));
})();
