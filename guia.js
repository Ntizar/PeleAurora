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
  c4: 'Modelo C4 nivel componente: contenedores de software y cómo interactúan.',
  eventos: 'Event modeling: línea de tiempo con UI, comandos y eventos del negocio.',
  agentflow: 'Flujos de agentes IA: entradas, herramientas y conectores LLM.',
  cynefin: 'Dominios de decisión Cynefin: complejo, complicado, claro y caótico.',
  ishikawa: 'Espina de pescado: causas agrupadas por categoría hacia un efecto.',
  wardley: 'Mapa de Wardley: componentes por evolución y visibilidad para el usuario.',
  flujo2: 'Variante con subgrafos y ciclo: cuando el proceso vuelve sobre sus pasos.',
  secuencia2: 'Mensajes autonumerados con activaciones y un bloque alt (dos caminos).',
  clases2: 'Clase genérica con parámetro de tipo, herencia y miembro.',
  estados2: 'Estados compuestos: una submáquina dentro de un estado.',
  entidad2: 'Entidades con atributos (columnas y tipos) agrupadas en subgrafos.',
  journey2: 'Dos actores puntuando las mismas etapas: dónde coinciden y dónde no.',
  gantt2: 'Hito (milestone), tarea terminada y tarea crítica marcada.',
  tarta2: 'Reparto de un día con más porciones y datos visibles.',
  cuadrantes2: 'Seis puntos y los cuatro cuadrantes nombrados: una shortlist de herramientas.',
  mapa2: 'Raíz circular con ramas y subramas: pele la cuelga en cascada; ideal para lluvias largas.',
  tiempo2: 'Cuatro periodos con varios eventos cada uno.',
  barras2: 'Barras y línea superpuestas en el mismo eje.',
  sankey2: 'Flujo energético con origen ramificado y recuperación parcial.',
  bloques2: 'Mosaico con cabecera a todo ancho y fila de pie.',
  paquetes2: 'Cabecera con frontmatter: bits visibles y 16 bits por fila.',
  kanban2: 'Tickets con frontmatter: enlace al tracker, prioridad y asignado.',
  radar2: 'Tres series comparadas sobre cuatro ejes de competencias.',
  arquitectura2: 'Grupos por tipo de infraestructura: cloud, servidores y base de datos.',
  git2: 'Ramas con merges y un commit etiquetado.',
  requisitos2: 'Dos requisitos con riesgo y método de verificación, y un elemento.',
  c42: 'Nivel contexto: persona, sistema y su interacción.',
  eventos2: 'Con resetframe y procesador: cuando algo externo cambia el estado.',
  agentflow2: 'Un agente paso a paso: entrada, herramienta y fin del flujo.',
  cynefin2: 'Los cuatro dominios con el ciclo completo entre ellos.',
  ishikawa2: 'Tres niveles de causa: categoría, causa y subcausa.',
  wardley2: 'Mapa con evolución de un componente hacia commodity.',
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
