/* ============================================================
   PeleAurora — guía: genera las fichas de la cheatsheet
   desde la misma fuente de verdad que el playground.
   ============================================================ */

import { EXAMPLE_LIST } from './ejemplos.js';

const DESCS = {
  flujo: 'Procesos y decisiones: cajas y flechas, con ramas de sí y no.',
  secuencia: 'Mensajes entre actores en el tiempo: quién llama a quién y con qué respuesta.',
  clases: 'Estructura de clases: atributos, métodos, herencia y composición.',
  estados: 'Máquina de estados: de qué estado a cuál con cada evento.',
  entidad: 'Modelo de datos: tablas, columnas y cómo se relacionan (1 a N, N a M).',
  journey: 'Experiencia de usuario por etapas, con puntuación por actor.',
  gantt: 'Cronograma: tareas con fecha, duración, secciones y dependencias.',
  tarta: 'Proporciones de un total, por porcentaje.',
  cuadrantes: 'Matriz de decisión: dos ejes y puntos clasificados por cuadrante.',
  mapa: 'Lluvia de ideas: raíz, ramas y hojas.',
  tiempo: 'Hitos organizados por periodos: qué ocurrió en cada etapa.',
  barras: 'Serie numérica: barras y líneas sobre dos ejes.',
  sankey: 'Flujos entre nodos: de dónde sale y a dónde va el volumen.',
  bloques: 'Composición de un sistema en rejilla: bloques y ancho por columnas.',
  paquetes: 'Mapa de bits de un paquete o protocolo, campo a campo.',
  kanban: 'Tablero de tareas: columnas, tarjetas y etiquetas de prioridad.',
  radar: 'Comparativa multidimensional: ejes de competencias y curvas por serie.',
  arquitectura: 'Servicios y grupos de infraestructura: cloud, servidores y bases de datos.',
  git: 'Historia de ramas y merges de un repositorio.',
  requisitos: 'Requisitos con riesgo, verificación y elementos del sistema.',
};

const fichas = document.getElementById('fichas');

EXAMPLE_LIST.forEach(([clave, es, , mermaidEs]) => {
  const ficha = document.createElement('article');
  ficha.className = 'nz-article nz-article--bordered pa-ficha';

  const h = document.createElement('h3');
  h.className = 'nz-h3';
  h.textContent = es;

  const p = document.createElement('p');
  p.className = 'nz-text--small';
  p.textContent = DESCS[clave] || '';

  const pre = document.createElement('pre');
  pre.className = 'pa-code';
  pre.textContent = mermaidEs;

  const acciones = document.createElement('div');
  acciones.className = 'pa-ficha-acciones';

  const probar = document.createElement('a');
  probar.className = 'nz-btn nz-btn--primary nz-btn--sm';
  probar.textContent = 'Probar en el playground';
  probar.href = `./index.html#source=${encodeURIComponent(mermaidEs)}`;

  const copiar = document.createElement('button');
  copiar.className = 'nz-btn nz-btn--soft nz-btn--sm';
  copiar.type = 'button';
  copiar.textContent = 'Copiar Mermaid';
  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(mermaidEs);
      copiar.textContent = '¡Copiado!';
      setTimeout(() => { copiar.textContent = 'Copiar Mermaid'; }, 1600);
    } catch { /* clipboard no disponible (iframe/blobs) — sin romper nada */ }
  });

  acciones.append(probar, copiar);
  ficha.append(h, p, pre, acciones);
  fichas.append(ficha);
});
