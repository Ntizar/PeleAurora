/* ============================================================
   PeleAurora — lógica del playground
   pele (Mermaid → SVG) + skin Aurora + panel de personalización.
   Sin build, sin framework: un fichero, tres secciones.
   ============================================================ */

const AURORA_VERSION = 'v9.2.0';

/* ---------- 1. i18n ---------- */
const I18N = {
  es: {
    'nav.play': 'Playground', 'nav.repo': 'Repo', 'nav.aurora': 'Aurora', 'nav.pele': 'pele',
    'hero.title': 'Diagramas Mermaid con diseño Aurora',
    'hero.lead': 'Escribe Mermaid, ve un SVG instantáneo y personaliza colores y formas a la derecha. Motor pele (230 kB, cero dependencias) + design system Aurora. Gratis, open source, sin build.',
    'editor.title': 'Fuente Mermaid', 'editor.label': 'Texto del diagrama',
    'canvas.title': 'Lienzo', 'canvas.note': 'Se recolorea sin re-renderizar',
    'controls.title': 'Tema y formas',
    'ctl.theme': 'Tema base', 'ctl.light': 'Claro', 'ctl.dark': 'Oscuro',
    'ctl.shape': 'Forma de los nodos', 'shape.square': 'Cuadrado', 'shape.rounded': 'Redondeado', 'shape.pill': 'Píldora',
    'ctl.radius': 'Radio de esquina', 'ctl.linewidth': 'Grosor de línea',
    'ctl.colors': 'Colores del tema', 'ctl.colorsnote': 'Se aplican al instante. Cambia cualquier color y el diseño es ya tuyo.',
    'ctl.series': 'Series (gráficos y categorías)',
    'btn.share': 'Copiar enlace', 'btn.copycss': 'Copiar CSS', 'btn.svg': 'Descargar SVG',
    'btn.reset': 'Restaurar Aurora', 'btn.exportcss': 'Descargar theme.css',
    'faq.q1': '¿Cómo lo uso en mi proyecto?',
    'faq.a1': 'npm install pele, enlaza tu theme.css (botón «Descargar theme.css») y llama a mount(). Menos de 10 líneas, sin build.',
    'faq.q2': '¿Qué diagramas soporta?',
    'faq.a2': 'Todos los de Mermaid 12.1: flowchart, secuencia, gantt, mindmap, pie, XY, kanban, timeline, quadrant, sankey…',
    'faq.q3': '¿Licencias?',
    'faq.a3': 'pele es MIT (Obsidian), Aurora es el design system de David Antizar. Este playground es MIT.',
    'status.ok': (ms) => `${ms} ms`, 'status.err': 'Error de sintaxis', 'status.reset': 'Restaurado Aurora', 'status.copied': 'Copiado ✓', 'ready': 'Listo',
    'color.fg': 'Texto', 'color.line': 'Líneas', 'color.surface': 'Nodos', 'color.surface-alt': 'Subgrafos',
    'color.border': 'Bordes', 'color.accent': 'Acento', 'color.bg': 'Fondo', 'color.critical': 'Crítico',
  },
  en: {
    'nav.play': 'Playground', 'nav.repo': 'Repo', 'nav.aurora': 'Aurora', 'nav.pele': 'pele',
    'hero.title': 'Mermaid diagrams with Aurora design',
    'hero.lead': 'Write Mermaid, get an instant SVG and customize colors and shapes on the right. pele engine (230 kB, zero dependencies) + Aurora design system. Free, open source, no build.',
    'editor.title': 'Mermaid source', 'editor.label': 'Diagram text',
    'canvas.title': 'Canvas', 'canvas.note': 'Recolored without re-rendering',
    'controls.title': 'Theme & shapes',
    'ctl.theme': 'Base theme', 'ctl.light': 'Light', 'ctl.dark': 'Dark',
    'ctl.shape': 'Node shape', 'shape.square': 'Square', 'shape.rounded': 'Rounded', 'shape.pill': 'Pill',
    'ctl.radius': 'Corner radius', 'ctl.linewidth': 'Line width',
    'ctl.colors': 'Theme colors', 'ctl.colorsnote': 'Applied instantly. Change any color and the design is yours.',
    'ctl.series': 'Series (charts & categories)',
    'btn.share': 'Copy link', 'btn.copycss': 'Copy CSS', 'btn.svg': 'Download SVG',
    'btn.reset': 'Reset to Aurora', 'btn.exportcss': 'Download theme.css',
    'faq.q1': 'How do I use it in my project?',
    'faq.a1': 'npm install pele, link your theme.css (the «Download theme.css» button) and call mount(). Under 10 lines, no build.',
    'faq.q2': 'Which diagrams are supported?',
    'faq.a2': 'All of Mermaid 12.1: flowchart, sequence, gantt, mindmap, pie, XY, kanban, timeline, quadrant, sankey…',
    'faq.q3': 'Licenses?',
    'faq.a3': 'pele is MIT (Obsidian), Aurora is David Antizar’s design system. This playground is MIT.',
    'status.ok': (ms) => `${ms} ms`, 'status.err': 'Syntax error', 'status.reset': 'Reset to Aurora', 'status.copied': 'Copied ✓', 'ready': 'Ready',
    'color.fg': 'Text', 'color.line': 'Lines', 'color.surface': 'Nodes', 'color.surface-alt': 'Subgraphs',
    'color.border': 'Borders', 'color.accent': 'Accent', 'color.bg': 'Background', 'color.critical': 'Critical',
  }
};
let lang = localStorage.getItem('pa-lang') || (navigator.language.startsWith('en') ? 'en' : 'es');

function applyI18n() {
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (typeof v === 'string') el.textContent = v;
  });
  document.documentElement.lang = lang;
  document.getElementById('btn-es').setAttribute('aria-selected', lang === 'es');
  document.getElementById('btn-en').setAttribute('aria-selected', lang === 'en');
  buildColorControls();
}

/* ---------- 2. Estado del tema (overrides sobre el skin Aurora) ---------- */
// Cada variable editable: nombre CSS de pele y etiqueta i18n.
const EDITABLE = [
  ['--pele-fg', 'color.fg'], ['--pele-line', 'color.line'],
  ['--pele-surface', 'color.surface'], ['--pele-surface-alt', 'color.surface-alt'],
  ['--pele-border', 'color.border'], ['--pele-accent', 'color.accent'],
  ['--pele-bg', 'color.bg'], ['--pele-critical', 'color.critical'],
];
const SERIES = [1, 2, 3, 4, 5, 6, 7, 8].map(n => [`--pele-series-${n}`, `Series ${n}`]);

const overrides = {}; // variable -> color | null (null = heredar de Aurora)
let theme = localStorage.getItem('pa-theme') || 'light';
let radius = 8, linewidth = 1.5;

function stageVars() {
  // Valores resueltos bajo el tema actual: los que manda Aurora
  // (para pintar los color-pickers con el color real del diagrama).
  const probe = document.createElement('div');
  probe.className = 'pele';
  probe.style.display = 'none';
  document.body.appendChild(probe);
  const cs = getComputedStyle(probe);
  const out = {};
  for (const [v] of EDITABLE.concat(SERIES)) out[v] = cs.getPropertyValue(v).trim();
  probe.remove();
  return out;
}

function liveCssText() {
  const lines = [];
  for (const [v, val] of Object.entries(overrides)) if (val) lines.push(`  ${v}: ${val};`);
  lines.push(`  --pele-radius: ${radius}px;`);
  lines.push(`  --pa-node-stroke: ${linewidth};`);
  lines.push(`  --pa-line-width: ${linewidth};`);
  return `.pele {\n${lines.join('\n')}\n}`;
}

function applyLive() {
  document.getElementById('live-style').textContent = liveCssText();
  buildColorControls(); // repintar pickers con el valor efectivo
}

function buildColorControls() {
  // Sonda con el live-style YA aplicado: los pickers deben mostrar
  // el color que el diagrama está usando de verdad ahora mismo.
  document.getElementById('live-style').textContent = liveCssText();
  const resolved = stageVars();
  const grid = document.getElementById('colors');
  const series = document.getElementById('series');
  grid.replaceChildren(); series.replaceChildren();
  const mk = (parent, [v, label]) => {
    const wrap = document.createElement('label');
    wrap.className = 'pa-swatch';
    const input = document.createElement('input');
    input.type = 'color';
    const cur = overrides[v] || resolved[v] || '#888888';
    input.value = toHex(cur);
    input.addEventListener('input', () => { overrides[v] = input.value; applyLive(); });
    input.addEventListener('dblclick', () => { delete overrides[v]; applyLive(); });
    const span = document.createElement('span');
    span.textContent = I18N[lang][label] || label;
    span.title = v;
    wrap.append(input, span);
    parent.appendChild(wrap);
  };
  EDITABLE.forEach(x => mk(grid, x));
  SERIES.forEach(x => mk(series, x));
}

function toHex(color) {
  color = color.trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  if (/^#[0-9a-f]{3}$/i.test(color)) return '#' + color.slice(1).split('').map(c => c + c).join('');
  const m = color.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (!m) return '#888888';
  return '#' + m.slice(1, 4).map(n => (+n).toString(16).padStart(2, '0')).join('');
}

/* ---------- 3. Ejemplos y render con pele ---------- */
const EXAMPLES = {
  es: {
    'flujo': `flowchart TD
  A[Texto Mermaid] --> B{¿Diagrama?}
  B -- Sí --> C[Pele]
  B -- No --> D[mermaid.js]
  C --> E([SVG con diseño Aurora])
  D --> E
  style E stroke:#f97316,stroke-width:2px`,
    'secuencia': `sequenceDiagram
  participant U as Usuario
  participant P as Playground
  participant Pe as pele
  U->>P: Escribe Mermaid
  P->>Pe: mount(texto)
  Pe-->>P: SVG instantáneo
  P-->>U: Diagrama vestido de Aurora`,
    'tarta': `pie showData
  title Composición del bundle
  "Layouts" : 45
  "Parsers" : 30
  "Textos" : 15
  "Flechas" : 10`,
    'gantt': `gantt
  title Lanzamiento de PeleAurora
  dateFormat YYYY-MM-DD
  section Diseño
  Skin Aurora      :done, a1, 2026-10-18, 2d
  section Build
  Playground       :active, b1, after a1, 3d
  Pages            : b2, after b1, 1d`,
    'mente': `mindmap
  root((PeleAurora))
    Veloz
      0.05–0.3 ms
      Sin dependencias
    Bonito
      Tokens Aurora
      Inter
    Libre
      MIT
      Playground online`,
    'barras': `xychart-beta
  title "Stars en GitHub"
  x-axis [oct 1, oct 5, oct 10, oct 15, oct 18]
  y-axis "Estrellas" 0 --> 60
  bar [4, 12, 22, 36, 46]
  line [4, 12, 22, 36, 46]`,
  },
  en: {
    'flow': `flowchart TD
  A[Mermaid text] --> B{Diagram?}
  B -- Yes --> C[Pele]
  B -- No --> D[mermaid.js]
  C --> E([SVG dressed in Aurora])
  D --> E
  style E stroke:#f97316,stroke-width:2px`,
    'sequence': `sequenceDiagram
  participant U as User
  participant P as Playground
  participant Pe as pele
  U->>P: Writes Mermaid
  P->>Pe: mount(text)
  Pe-->>P: Instant SVG
  P-->>U: Diagram dressed in Aurora`,
    'pie': `pie showData
  title Bundle composition
  "Layouts" : 45
  "Parsers" : 30
  "Texts" : 15
  "Arrows" : 10`,
    'gantt': `gantt
  title PeleAurora launch
  dateFormat YYYY-MM-DD
  section Design
  Aurora skin      :done, a1, 2026-10-18, 2d
  section Build
  Playground       :active, b1, after a1, 3d
  Pages            : b2, after b1, 1d`,
    'mind': `mindmap
  root((PeleAurora))
    Fast
      0.05–0.3 ms
      Zero deps
    Beautiful
      Aurora tokens
      Inter
    Free
      MIT
      Live playground`,
    'bars': `xychart-beta
  title "GitHub stars"
  x-axis [oct 1, oct 5, oct 10, oct 15, oct 18]
  y-axis "Stars" 0 --> 60
  bar [4, 12, 22, 36, 46]
  line [4, 12, 22, 36, 46]`,
  }
};

const status = document.getElementById('status');
const srcEl = document.getElementById('src');
const stage = document.getElementById('stage');
let mounted = null;

function setStatus(kind, text) {
  status.className = `nz-badge nz-badge--${kind}`;
  status.textContent = text;
}

function renderSource() {
  const text = srcEl.value;
  const t0 = performance.now();
  try {
    if (!mounted) mounted = window.pele.mount(stage, text, { onError: () => {} });
    else mounted.update(text);
    if (mounted.error) throw mounted.error;
    const ms = (performance.now() - t0).toFixed(1);
    setStatus('success', I18N[lang]['status.ok'](ms));
  } catch (err) {
    showError(err);
  }
}

function showError(err) {
  setStatus('danger', I18N[lang]['status.err']);
  // El stage se reescribe entero: el mount anterior queda invalidado.
  if (mounted) { try { mounted.destroy(); } catch (e) {} mounted = null; }
  const code = document.createElement('pre');
  code.className = 'pa-error pele-error';
  code.textContent = err && err.message ? err.message : String(err);
  stage.replaceChildren(code);
}

function buildExamples() {
  const tabs = document.getElementById('examples');
  tabs.replaceChildren();
  const names = Object.keys(EXAMPLES[lang]);
  names.forEach((name, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'nz-tabs__tab' + (i === 0 ? ' is-active' : '');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0);
    b.textContent = name;
    b.addEventListener('click', () => {
      tabs.querySelectorAll('.nz-tabs__tab').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
      b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
      srcEl.value = EXAMPLES[lang][name];
      renderSource();
    });
    tabs.appendChild(b);
  });
}

/* ---------- 4. Arranque y eventos ---------- */
function setTheme(t) {
  theme = t;
  document.documentElement.setAttribute('data-nz-theme', t);
  localStorage.setItem('pa-theme', t);
  document.getElementById('btn-light').setAttribute('aria-selected', t === 'light');
  document.getElementById('btn-dark').setAttribute('aria-selected', t === 'dark');
  buildColorControls();
}

function flash(msgKind, msg) {
  const old = status.textContent;
  setStatus(msgKind, msg);
  setTimeout(() => { if (status.textContent === msg) setStatus('success', old); }, 1600);
}

function copyText(text) {
  return navigator.clipboard.writeText(text).then(
    () => flash('success', I18N[lang]['status.copied']),
    () => {}
  );
}

function download(name, mime, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: mime }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

// Enlace compartido: #source=<mermaid urlencoded> (como pele.run)
function shareLink() {
  const url = `${location.origin}${location.pathname}#source=${encodeURIComponent(srcEl.value)}`;
  history.replaceState(null, '', '#source=' + encodeURIComponent(srcEl.value));
  return copyText(url);
}
function readHash() {
  const m = location.hash.match(/source=([^&]+)/);
  if (m) { srcEl.value = decodeURIComponent(m[1]); return true; }
  return false;
}

window.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  applyI18n();
  if (!readHash()) srcEl.value = EXAMPLES[lang][Object.keys(EXAMPLES[lang])[0]];
  buildExamples();
  renderSource();

  srcEl.addEventListener('input', () => { clearTimeout(srcEl._t); srcEl._t = setTimeout(renderSource, 250); });

  document.getElementById('btn-es').addEventListener('click', () => { lang = 'es'; localStorage.setItem('pa-lang', 'es'); applyI18n(); srcEl.value = EXAMPLES.es['flujo']; buildExamples(); renderSource(); });
  document.getElementById('btn-en').addEventListener('click', () => { lang = 'en'; localStorage.setItem('pa-lang', 'en'); applyI18n(); srcEl.value = EXAMPLES.en['flow']; buildExamples(); renderSource(); });

  document.getElementById('btn-light').addEventListener('click', () => setTheme('light'));
  document.getElementById('btn-dark').addEventListener('click', () => setTheme('dark'));

  document.querySelectorAll('#shape-group button').forEach(b => {
    b.addEventListener('click', () => {
      radius = +b.dataset.radius;
      const r = document.getElementById('radius');
      r.value = radius;
      document.getElementById('radius-out').textContent = radius + 'px';
      document.querySelectorAll('#shape-group button').forEach(x => x.setAttribute('aria-selected', x === b));
      applyLive();
    });
  });

  const rEl = document.getElementById('radius');
  rEl.addEventListener('input', () => { radius = +rEl.value; document.getElementById('radius-out').textContent = radius + 'px'; applyLive(); });
  const wEl = document.getElementById('linewidth');
  wEl.addEventListener('input', () => { linewidth = +wEl.value; document.getElementById('linewidth-out').textContent = linewidth + 'px'; applyLive(); });

  document.getElementById('btn-reset').addEventListener('click', () => {
    for (const k of Object.keys(overrides)) delete overrides[k];
    radius = 8; linewidth = 1.5;
    rEl.value = 8; wEl.value = 1.5;
    document.getElementById('radius-out').textContent = '8px';
    document.getElementById('linewidth-out').textContent = '1.5px';
    applyLive();
    setStatus('brand', I18N[lang]['status.reset']);
  });

  document.getElementById('btn-share').addEventListener('click', shareLink);
  document.getElementById('btn-copycss').addEventListener('click', () => copyText(cssExport()));
  document.getElementById('btn-exportcss').addEventListener('click', () => download('theme.css', 'text/css', cssExport()));
  document.getElementById('btn-svg').addEventListener('click', () => {
    const svg = stage.querySelector('svg');
    if (svg) download('diagrama.svg', 'image/svg+xml', new XMLSerializer().serializeToString(svg));
  });
});

// CSS exportable: el tema efectivo, listo para pegar en un proyecto.
function cssExport() {
  const base = `/* PeleAurora — tema generado desde https://ntizar.github.io/PeleAurora/
   Aurora ${AURORA_VERSION} · requiere tokens.css de Aurora (o define los valores a mano) */
`;
  const eff = Object.assign({}, stageVars(), overrides);
  const vars = EDITABLE.concat(SERIES)
    .map(([v]) => `  ${v}: ${overrides[v] || eff[v]};`)
    .join('\n');
  return `${base}.pele {\n${vars}\n  --pele-radius: ${radius}px;\n}\n\n/* Grosor de trazo (regla local de PeleAurora) */\n.pele {\n  --pa-node-stroke: ${linewidth};\n  --pa-line-width: ${linewidth};\n}\n`;
}
