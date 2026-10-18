/* ============================================================
   PeleAurora — lógica del playground
   pele (Mermaid → SVG) + skin Aurora + panel de personalización.
   Sin build, sin framework: un fichero, cuatro secciones.
   ============================================================ */

import { EXAMPLE_LIST } from './ejemplos.js';

const AURORA_VERSION = 'v9.2.0';

/* ---------- 1. i18n ---------- */
const I18N = {
  es: {
    'nav.play': 'Playground', 'nav.guia': 'Guía', 'nav.repo': 'Repo', 'nav.aurora': 'Aurora', 'nav.pele': 'pele',
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
    'ctl.seriesnote': 'Elige una paleta estudiada o afina los 8 colores a mano.',
    'btn.share': 'Copiar enlace', 'btn.copycss': 'Copiar CSS', 'btn.svg': 'Descargar SVG',
    'btn.reset': 'Restaurar Aurora', 'btn.exportcss': 'Exportar mi tema (.css)',
    'btn.exportcss.hint': 'Te baja un theme.css con tus colores elegidos aquí, listo para usar pele en tu proyecto.',
    'faq.q1': '¿Cómo lo uso en mi proyecto?',
    'faq.a1': 'npm install pele, enlaza los tokens de Aurora y tu theme.css, y llama a mount(). Menos de 10 líneas, sin build.',
    'faq.a1b': '«Exportar mi tema (.css)» te baja un theme.css con tus colores elegidos aquí, listo para enlazar en tu proyecto con pele.',
    'faq.q2': '¿Qué diagramas soporta?',
    'faq.a2': '52 ejemplos de 26 tipos de diagrama: flujo, secuencia, clases, estados, entidad-relación, journey, gantt, tarta, cuadrantes, mapa mental, timeline, XY, sankey, bloques, paquetes, kanban, radar, arquitectura, git, requisitos, C4, event modeling, agentflow, cynefin, ishikawa y Wardley. Cada tipo trae una plantilla mínima y una variante avanzada (ciclos, subgrafos, multi-serie, frontmatter…).',
    'faq.q3': '¿Licencias?',
    'faq.a3': 'pele es MIT (Obsidian), Aurora es el design system de David Antizar. Este playground es MIT.',
    'status.ok': (ms) => `${ms} ms`, 'status.err': 'Error de sintaxis', 'status.reset': 'Restaurado Aurora',
    'status.copied': 'Copiado ✓', 'status.preset': 'Paleta aplicada: ', 'ready': 'Listo',
    'color.fg': 'Texto', 'color.line': 'Líneas', 'color.surface': 'Nodos', 'color.surface-alt': 'Subgrafos',
    'color.border': 'Bordes', 'color.accent': 'Acento', 'color.bg': 'Fondo', 'color.critical': 'Crítico',
    'series.custom': 'A mano',
    'series.n': (n) => `Serie ${n}`,
  },
  en: {
    'nav.play': 'Playground', 'nav.guia': 'Guide', 'nav.repo': 'Repo', 'nav.aurora': 'Aurora', 'nav.pele': 'pele',
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
    'ctl.seriesnote': 'Pick a studied palette or fine-tune the 8 colors by hand.',
    'btn.share': 'Copy link', 'btn.copycss': 'Copy CSS', 'btn.svg': 'Download SVG',
    'btn.reset': 'Reset to Aurora', 'btn.exportcss': 'Export my theme (.css)',
    'btn.exportcss.hint': 'Downloads a theme.css with your chosen colors, ready to use pele in your project.',
    'faq.q1': 'How do I use it in my project?',
    'faq.a1': 'npm install pele, link the Aurora tokens and your theme.css, then call mount(). Under 10 lines, no build.',
    'faq.a1b': '«Export my theme (.css)» downloads a theme.css with the colors you picked here, ready to link in your pele project.',
    'faq.q2': 'Which diagrams are supported?',
    'faq.a2': '52 ready-made examples of 26 diagram types: flowchart, sequence, class, state, ER, journey, gantt, pie, quadrant, mindmap, timeline, XY, sankey, block, packet, kanban, radar, architecture, git, requirements, C4, event modeling, agentflow, cynefin, ishikawa and Wardley. Every type ships a minimal template and an advanced variant (loops, subgraphs, multi-series, frontmatter…).',
    'faq.q3': 'Licenses?',
    'faq.a3': 'pele is MIT (Obsidian), Aurora is David Antizar’s design system. This playground is MIT.',
    'status.ok': (ms) => `${ms} ms`, 'status.err': 'Syntax error', 'status.reset': 'Reset to Aurora',
    'status.copied': 'Copied ✓', 'status.preset': 'Palette applied: ', 'ready': 'Ready',
    'color.fg': 'Text', 'color.line': 'Lines', 'color.surface': 'Nodes', 'color.surface-alt': 'Subgraphs',
    'color.border': 'Borders', 'color.accent': 'Accent', 'color.bg': 'Background', 'color.critical': 'Critical',
    'series.custom': 'Custom',
    'series.n': (n) => `Series ${n}`,
  }
};
let lang = localStorage.getItem('pa-lang') || (navigator.language.startsWith('en') ? 'en' : 'es');

/* ---------- 2. Estado del tema (overrides sobre el skin Aurora) ---------- */
// Cada variable editable: nombre CSS de pele y etiqueta i18n.
const EDITABLE = [
  ['--pele-fg', 'color.fg'], ['--pele-line', 'color.line'],
  ['--pele-surface', 'color.surface'], ['--pele-surface-alt', 'color.surface-alt'],
  ['--pele-border', 'color.border'], ['--pele-accent', 'color.accent'],
  ['--pele-bg', 'color.bg'], ['--pele-critical', 'color.critical'],
];
const SERIES_VARS = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `--pele-series-${n}`);

/* Paletas de serie estudiadas (5): light y dark. La primera es la
   del skin por defecto (azules y naranjas Aurora). Adyacentes siempre
   contrastadas; nada de tonos gemelos en la misma escala. */
const SERIES_PRESETS = [
  { id: 'aurora', es: 'Aurora', en: 'Aurora',
    light: ['#2563eb', '#f97316', '#0ea5e9', '#c2410c', '#60a5fa', '#fbbf24', '#64748b', '#1e40af'],
    dark:  ['#60a5fa', '#fb923c', '#7dd3fc', '#f97316', '#93c5fd', '#fbbf24', '#94a3b8', '#bfdbfe'] },
  { id: 'oceano', es: 'Océano', en: 'Ocean',
    light: ['#0c4a6e', '#0891b2', '#2563eb', '#06b6d4', '#1d4ed8', '#7dd3fc', '#64748b', '#155e75'],
    dark:  ['#7dd3fc', '#22d3ee', '#93c5fd', '#67e8f9', '#60a5fa', '#a5f3fc', '#94a3b8', '#38bdf8'] },
  { id: 'brasa', es: 'Brasa', en: 'Ember',
    light: ['#ea580c', '#f59e0b', '#dc2626', '#fb923c', '#b45309', '#fca5a5', '#78716c', '#9a3412'],
    dark:  ['#fb923c', '#fbbf24', '#f87171', '#fdba74', '#d97706', '#fecaca', '#a8a29e', '#f97316'] },
  { id: 'bosque', es: 'Bosque', en: 'Forest',
    light: ['#16a34a', '#0d9488', '#4d7c0f', '#34d399', '#065f46', '#a3e635', '#6b7280', '#059669'],
    dark:  ['#4ade80', '#2dd4bf', '#a3e635', '#6ee7b7', '#34d399', '#d9f99d', '#9ca3af', '#10b981'] },
  { id: 'prisma', es: 'Prisma', en: 'Prism',
    light: ['#0072b2', '#d55e00', '#009e73', '#cc79a7', '#56b4e9', '#e69f00', '#6a51a2', '#999999'],
    dark:  ['#4da3e0', '#f5813c', '#2ec48e', '#e29ac2', '#8ccdf2', '#ffbe33', '#a98fd6', '#c4c4c4'] },
];
let presetId = 'aurora';

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
  for (const [v] of EDITABLE) out[v] = cs.getPropertyValue(v).trim();
  SERIES_VARS.forEach(v => { out[v] = cs.getPropertyValue(v).trim(); });
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
}

/* ---- Controles de color: se crean UNA vez y se repintan, nunca se
   destruyen mientras el usuario arrastra un picker (ese era el fallo). ---- */
const colorRefs = []; // { input, v }

function refreshColorControls() {
  // Sonda con el live-style YA aplicado: los pickers muestran el color
  // que el diagrama está usando de verdad ahora mismo.
  document.getElementById('live-style').textContent = liveCssText();
  const resolved = stageVars();
  for (const ref of colorRefs) {
    const cur = overrides[ref.v] || resolved[ref.v] || '#888888';
    ref.input.value = toHex(cur);
  }
}

function mkSwatch(parent, v, labelText) {
  const wrap = document.createElement('label');
  wrap.className = 'pa-swatch';
  const input = document.createElement('input');
  input.type = 'color';
  const span = document.createElement('span');
  span.textContent = labelText;
  span.title = v;
  input.addEventListener('input', () => {
    overrides[v] = input.value;
    if (v.startsWith('--pele-series')) { presetId = '__custom'; updatePresetButtons(); }
    applyLive();
  });
  input.addEventListener('dblclick', () => {
    delete overrides[v];
    if (v.startsWith('--pele-series')) { presetId = '__custom'; updatePresetButtons(); }
    refreshColorControls();
    applyLive();
  });
  wrap.append(input, span);
  parent.appendChild(wrap);
  colorRefs.push({ input, v });
}

function buildColorControls() {
  colorRefs.length = 0;
  const grid = document.getElementById('colors');
  const series = document.getElementById('series');
  grid.replaceChildren(); series.replaceChildren();
  EDITABLE.forEach(([v, label]) => mkSwatch(grid, v, I18N[lang][label] || label));
  SERIES_VARS.forEach((v, i) => mkSwatch(series, v, (I18N[lang]['series.n'] || (n => `Series ${n}`))(i + 1)));
  refreshColorControls();
}

/* ---- Presets de paleta ---- */
function updatePresetButtons() {
  document.querySelectorAll('#preset-group button').forEach(b => {
    b.setAttribute('aria-selected', b.dataset.preset === presetId);
  });
}

function applyPreset(id, opts = {}) {
  const p = SERIES_PRESETS.find(x => x.id === id);
  if (!p) return;
  presetId = id;
  const cols = theme === 'dark' ? p.dark : p.light;
  cols.forEach((hex, i) => { overrides[`--pele-series-${i + 1}`] = hex; });
  updatePresetButtons();
  refreshColorControls();
  applyLive();
  if (!opts.silent) setStatus('brand', I18N[lang]['status.preset'] + (lang === 'es' ? p.es : p.en));
}

function buildPresetButtons() {
  const group = document.getElementById('preset-group');
  group.replaceChildren();
  SERIES_PRESETS.forEach(p => {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.preset = p.id;
    b.textContent = lang === 'es' ? p.es : p.en;
    b.addEventListener('click', () => applyPreset(p.id));
    group.appendChild(b);
  });
  const custom = document.createElement('button');
  custom.type = 'button';
  custom.dataset.preset = '__custom';
  custom.textContent = I18N[lang]['series.custom'];
  custom.addEventListener('click', () => {}); // estado pasivo: se activa al tocar un picker
  group.appendChild(custom);
  updatePresetButtons();
}

function toHex(color) {
  color = color.trim();
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  if (/^#[0-9a-f]{3}$/i.test(color)) return '#' + color.slice(1).split('').map(c => c + c).join('');
  const m = color.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (!m) return '#888888';
  return '#' + m.slice(1, 4).map(n => (+n).toString(16).padStart(2, '0')).join('');
}

function applyI18n() {
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const v = dict[el.dataset.i18nTitle];
    if (typeof v === 'string') el.title = v;
  });
  document.documentElement.lang = lang;
  document.getElementById('btn-es').setAttribute('aria-selected', lang === 'es');
  document.getElementById('btn-en').setAttribute('aria-selected', lang === 'en');
  buildPresetButtons();
  buildColorControls();
}

/* ---------- 3. Render con pele ---------- */

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

function currentExample(name) {
  const ex = EXAMPLE_LIST.find(x => x[0] === name);
  return lang === 'es' ? ex[3] : ex[4];
}

function buildExamples() {
  const tabs = document.getElementById('examples');
  tabs.replaceChildren();
  EXAMPLE_LIST.forEach((ex, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'nz-tabs__tab' + (i === 0 ? ' is-active' : '');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0);
    b.textContent = lang === 'es' ? ex[1] : ex[2];
    b.addEventListener('click', () => {
      tabs.querySelectorAll('.nz-tabs__tab').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
      b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
      srcEl.value = currentExample(ex[0]);
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
  // La paleta activa se re-aplica con los tonos del nuevo tema:
  // sin esto, los colores elegidos en claro quedan ilegibles en oscuro.
  if (presetId && presetId !== '__custom') applyPreset(presetId, { silent: true });
  else refreshColorControls();
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
  applyPreset('aurora', { silent: true });
  if (!readHash()) srcEl.value = currentExample(EXAMPLE_LIST[0][0]);
  buildExamples();
  renderSource();

  srcEl.addEventListener('input', () => { clearTimeout(srcEl._t); srcEl._t = setTimeout(renderSource, 250); });

  document.getElementById('btn-es').addEventListener('click', () => { lang = 'es'; localStorage.setItem('pa-lang', 'es'); applyI18n(); srcEl.value = currentExample('flujo'); buildExamples(); renderSource(); });
  document.getElementById('btn-en').addEventListener('click', () => { lang = 'en'; localStorage.setItem('pa-lang', 'en'); applyI18n(); srcEl.value = currentExample('flujo'); buildExamples(); renderSource(); });

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
    presetId = 'aurora';
    updatePresetButtons();
    refreshColorControls();
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
  const vars = EDITABLE.concat(SERIES_VARS.map(v => [v]))
    .map(([v]) => `  ${v}: ${overrides[v] || eff[v]};`)
    .join('\n');
  return `${base}.pele {\n${vars}\n  --pele-radius: ${radius}px;\n}\n\n/* Grosor de trazo (regla local de PeleAurora) */\n.pele {\n  --pa-node-stroke: ${linewidth};\n  --pa-line-width: ${linewidth};\n}\n`;
}
