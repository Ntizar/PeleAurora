/* ============================================================
   PeleAurora — ejemplos compartidos
   Una sola fuente de verdad: el playground (app.js) y la guía
   (guia.js) importan esta lista.
   Formato de cada entrada:
   [clave, nombre ES, nombre EN, mermaid ES, mermaid EN]
   52 ejemplos: plantilla mínima + variante avanzada por tipo
   (26 tipos verificados contra pele 1.6)
   ============================================================ */

export const EXAMPLE_LIST = [
  ['flujo', 'Flujo', 'Flow',
`flowchart LR
  A[Texto Mermaid] --> B{¿Diagrama?}
  B -- Sí --> C[Pele]
  B -- No --> D[mermaid.js]
  C --> E([SVG con diseño Aurora])
  D --> E
  style E stroke:#f97316,stroke-width:2px`,
`flowchart LR
  A[Mermaid text] --> B{Diagram?}
  B -- Yes --> C[Pele]
  B -- No --> D[mermaid.js]
  C --> E([SVG dressed in Aurora])
  D --> E
  style E stroke:#f97316,stroke-width:2px`],
  ['flujo2', 'Flujo · Ciclo y subgrafos', 'Flowchart · Loop & subgraphs',
`flowchart TD
  subgraph pedido[Pedido]
    A[Recibe] --> B{Valido?}
  end
  B -- Si --> C[Cobra]
  C --> D[Envia]
  B -- No --> A
  D --> A2[Archiva] --> A
  style B stroke:#f97316,stroke-width:2px`,
`flowchart TD
  subgraph order[Order]
    A[Receive] --> B{Valid?}
  end
  B -- Yes --> C[Charge]
  C --> D[Ship]
  B -- No --> A
  D --> A2[Archive] --> A
  style B stroke:#f97316,stroke-width:2px`],
  ['secuencia', 'Secuencia', 'Sequence',
`sequenceDiagram
  participant U as Usuario
  participant P as Playground
  participant Pe as pele
  U->>P: Escribe Mermaid
  P->>Pe: mount(texto)
  Pe-->>P: SVG instantáneo
  P-->>U: Diagrama vestido de Aurora`,
`sequenceDiagram
  participant U as User
  participant P as Playground
  participant Pe as pele
  U->>P: Writes Mermaid
  P->>Pe: mount(text)
  Pe-->>P: Instant SVG
  P-->>U: Diagram dressed in Aurora`],
  ['secuencia2', 'Secuencia · Autonúmero', 'Sequence · Autonumber',
`sequenceDiagram
  autonumber
  actor U as Usuario
  participant P as Playground
  participant E as pele
  U->>P: Escribe Mermaid
  activate P
  P->>E: mount(fuente)
  activate E
  E-->>P: SVG Aurora
  deactivate E
  alt sin errores
    P-->>U: Diagrama
  else sintaxis invalida
    P-->>U: Aviso en rojo
  end
  deactivate P`,
`sequenceDiagram
  autonumber
  actor U as User
  participant P as Playground
  participant E as pele
  U->>P: Writes Mermaid
  activate P
  P->>E: mount(source)
  activate E
  E-->>P: Aurora SVG
  deactivate E
  alt no errors
    P-->>U: Diagram
  else bad syntax
    P-->>U: Red warning
  end
  deactivate P`],
  ['clases', 'Clases', 'Class',
`classDiagram
  class Animal {
    +String nombre
    +volar()
  }
  Animal <|-- Pato
  Animal <|-- Pez
  Pato : +graznar()
  Pez : +nadar()`,
`classDiagram
  class Animal {
    +String name
    +fly()
  }
  Animal <|-- Duck
  Animal <|-- Fish
  Duck : +quack()
  Fish : +swim()`],
  ['clases2', 'Clases · Genérico', 'Class · Generic',
`classDiagram
  class Caja~T~ {
    +T contenido
    +guardar(valor) void
  }
  class CajaNumerica
  Caja <|-- CajaNumerica
  Caja : +estaVacia() bool`,
`classDiagram
  class Box~T~ {
    +T content
    +put(value) void
  }
  class NumberBox
  Box <|-- NumberBox
  Box : +isEmpty() bool`],
  ['estados', 'Estados', 'State',
`stateDiagram-v2
  [*] --> Borrador
  Borrador --> Revisando : enviar
  Revisando --> Publicado : aprobar
  Revisando --> Borrador : rechazar
  Publicado --> [*]`,
`stateDiagram-v2
  [*] --> Draft
  Draft --> Review : submit
  Review --> Published : approve
  Review --> Draft : reject
  Published --> [*]`],
  ['estados2', 'Estados · Anidados', 'State · Nested',
`stateDiagram-v2
  state Publicado {
    [*] --> Revisando
    Revisando --> Aprobado : revisor OK
    Aprobado --> [*]
  }
  [*] --> Borrador
  Borrador --> Publicado : publica
  Publicado --> Borrador : edicion`,
`stateDiagram-v2
  state Published {
    [*] --> Reviewing
    Reviewing --> Approved : reviewer OK
    Approved --> [*]
  }
  [*] --> Draft
  Draft --> Published : publish
  Published --> Draft : edit`],
  ['entidad', 'Entidad-Rel.', 'ER',
`erDiagram
  CLIENTE ||--o{ PEDIDO : realiza
  PEDIDO ||--|{ LINEA : contiene
  PRODUCTO ||--o{ LINEA : aparece`,
`erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE : contains
  PRODUCT ||--o{ LINE : appears`],
  ['entidad2', 'ER · Atributos', 'ER · Attributes',
`erDiagram
  subgraph ventas[Ventas]
    CLIENTE {
      string nombre
      string email
    }
    CLIENTE ||--o{ PEDIDO : realiza
  end
  subgraph almacen[Almacen]
    PEDIDO ||--|{ LINEA : contiene
    PRODUCTO ||--o{ LINEA : aparece
  end`,
`erDiagram
  subgraph sales[Sales]
    CUSTOMER {
      string name
      string email
    }
    CUSTOMER ||--o{ ORDER : places
  end
  subgraph warehouse[Warehouse]
    ORDER ||--|{ LINE : contains
    PRODUCT ||--o{ LINE : appears
  end`],
  ['journey', 'Journey', 'Journey',
`journey
  title Un día con PeleAurora
  section Descubrir
    Llegar a la web: 5: Yo
    Ver ejemplos: 4: Yo
  section Crear
    Escribir Mermaid: 5: Yo
    Exportar el SVG: 5: Yo, Equipo`,
`journey
  title A day with PeleAurora
  section Discover
    Land on the site: 5: Me
    Browse examples: 4: Me
  section Create
    Write Mermaid: 5: Me
    Export the SVG: 5: Me, Team`],
  ['journey2', 'Journey · Dos actores', 'Journey · Two actors',
`journey
  title Compra en la tienda
  section Descubrir
    Ver catalogo: 4: Ana
    Buscar filtro: 3: Ana, Luis
  section Comprar
    Anadir al carrito: 5: Ana
    Pagar: 2: Ana, Luis`,
`journey
  title Store checkout
  section Discover
    Browse catalog: 4: Anna
    Filter search: 3: Anna, Louis
  section Buy
    Add to cart: 5: Anna
    Pay: 2: Anna, Louis`],
  ['gantt', 'Gantt', 'Gantt',
`gantt
  title Lanzamiento de PeleAurora
  dateFormat YYYY-MM-DD
  section Diseño
  Skin Aurora      :done, a1, 2026-10-16, 2d
  section Build
  Playground       :active, b1, after a1, 3d
  Pages            : b2, after b1, 1d`,
`gantt
  title PeleAurora launch
  dateFormat YYYY-MM-DD
  section Design
  Aurora skin      :done, a1, 2026-10-16, 2d
  section Build
  Playground       :active, b1, after a1, 3d
  Pages            : b2, after b1, 1d`],
  ['gantt2', 'Gantt · Hito', 'Gantt · Milestone',
`gantt
  title Lanzamiento
  dateFormat YYYY-MM-DD
  section Preparacion
  Spec v1 :done, a1, 2026-10-01, 5d
  Hito alpha :milestone, m1, 2026-10-06, 0d
  section Desarrollo
  Beta :a2, after m1, 10d
  Estabilizacion :crit, after a2, 5d`,
`gantt
  title Release
  dateFormat YYYY-MM-DD
  section Prep
  Spec v1 :done, a1, 2026-10-01, 5d
  Alpha milestone :milestone, m1, 2026-10-06, 0d
  section Build
  Beta :a2, after m1, 10d
  Stabilize :crit, after a2, 5d`],
  ['tarta', 'Tarta', 'Pie',
`pie showData
  title Composición del bundle
  "Layouts" : 45
  "Parsers" : 30
  "Textos" : 15
  "Flechas" : 10`,
`pie showData
  title Bundle composition
  "Layouts" : 45
  "Parsers" : 30
  "Texts" : 15
  "Arrows" : 10`],
  ['tarta2', 'Tarta · Reparto', 'Pie · Day split',
`pie showData title Reparto del dia
  "Trabajo" : 480
  "Familia" : 240
  "Deporte" : 60
  "PeleAurora" : 90
  "Sueno" : 570`,
`pie showData title Day split
  "Work" : 480
  "Family" : 240
  "Sport" : 60
  "PeleAurora" : 90
  "Sleep" : 570`],
  ['treemap', 'Treemap', 'Treemap',
`treemap-beta
"Sección 1"
    "Hoja 1.1": 12
    "Sección 1.2"
      "Hoja 1.2.1": 12
"Sección 2"
    "Hoja 2.1": 20
    "Hoja 2.2": 25`,
`treemap-beta
"Section 1"
    "Leaf 1.1": 12
    "Section 1.2"
      "Leaf 1.2.1": 12
"Section 2"
    "Leaf 2.1": 20
    "Leaf 2.2": 25`],
  ['treemap2', 'Treemap · Estilos', 'Treemap · Styles',
`---
config:
  treemap:
    padding: 12
---
treemap-beta
"Marca"
    "Azul 600": 40:::azul
    "Acento": 25:::naranja
"Series"
    "Océano": 15
    "Brasa": 10
    "Bosque": 6
classDef azul fill:var(--pele-series-1),stroke:var(--pele-series-8),color:#ffffff
classDef naranja fill:var(--pele-series-2),stroke:var(--pele-series-4),color:#ffffff`,
`---
config:
  treemap:
    padding: 12
---
treemap-beta
"Brand"
    "Blue 600": 40:::blue
    "Accent": 25:::orange
"Series"
    "Ocean": 15
    "Ember": 10
    "Forest": 6
classDef blue fill:var(--pele-series-1),stroke:var(--pele-series-8),color:#ffffff
classDef orange fill:var(--pele-series-2),stroke:var(--pele-series-4),color:#ffffff`],
  ['cuadrantes', 'Cuadrantes', 'Quadrant',
`quadrantChart
  title Backlog del playground
  x-axis Bajo esfuerzo --> Alto esfuerzo
  y-axis Poco impacto --> Mucho impacto
  quadrant-1 Hazlo ya
  quadrant-2 Planifica
  "Más tipos de gráfico": [0.65, 0.9]
  "Modo oscuro fino": [0.2, 0.6]
  "Docs de pele": [0.4, 0.35]`,
`quadrantChart
  title Playground backlog
  x-axis Low effort --> High effort
  y-axis Low impact --> High impact
  quadrant-1 Do it now
  quadrant-2 Plan it
  "More chart types": [0.65, 0.9]
  "Fine dark mode": [0.2, 0.6]
  "pele docs": [0.4, 0.35]`],
  ['cuadrantes2', 'Cuadrantes · Selección', 'Quadrant · Shortlist',
`quadrantChart
  title Herramientas del chiringuito
  x-axis Poco polivalente --> Todoterreno
  y-axis Poco madura --> Madura
  quadrant-1 Adoptar ya
  quadrant-2 Vigilar de cerca
  quadrant-3 Descartar
  quadrant-4 Probar con calma
  "pele": [0.7, 0.75]
  "Aurora": [0.85, 0.9]
  "Excel": [0.9, 0.95]
  "Script a mano": [0.3, 0.2]
  "IA nueva": [0.4, 0.45]
  "Ese framework": [0.2, 0.35]`,
`quadrantChart
  title Tooling shortlist
  x-axis Narrow --> Swiss knife
  y-axis Immature --> Mature
  quadrant-1 Adopt now
  quadrant-2 Watch closely
  quadrant-3 Drop
  quadrant-4 Try calmly
  "pele": [0.7, 0.75]
  "Aurora": [0.85, 0.9]
  "Excel": [0.9, 0.95]
  "Handmade script": [0.3, 0.2]
  "Fresh AI": [0.4, 0.45]
  "That framework": [0.2, 0.35]`],
  ['mapa', 'Mapa mental', 'Mindmap',
`mindmap
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
`mindmap
  root((PeleAurora))
    Fast
      0.05–0.3 ms
      Zero deps
    Beautiful
      Aurora tokens
      Inter
    Free
      MIT
      Live playground`],
  ['mapa2', 'Mapa · Raíz circular', 'Mindmap · Round root',
`mindmap
  root((Aurora))
    Marca
      Azul 600
      Naranja acento
    Formas
      Radio
      Pildora
    Series
      Oceano
      Brasa
      Bosque
      Prisma`,
`mindmap
  root((Aurora))
    Brand
      Blue 600
      Orange accent
    Shapes
      Radius
      Pill
    Series
      Ocean
      Ember
      Forest
      Prism`],
  ['tiempo', 'Timeline', 'Timeline',
`timeline
  title Hoja de ruta
  Octubre 2026 : Skin Aurora : Playground
  Noviembre : Exportar PNG : Temas de marca
  Diciembre : Colección de recetas`,
`timeline
  title Roadmap
  October 2026 : Aurora skin : Playground
  November : PNG export : Brand themes
  December : Recipe collection`],
  ['tiempo2', 'Timeline · Multi', 'Timeline · Multi',
`timeline
  title PeleAurora
  Septiembre : Motor pele elegido
  Octubre : Playground v1 : Series y paletas
  Octubre 18 : Guia de uso : 26 tipos
  Proximo : Exportar PNG : Recetas de marca`,
`timeline
  title PeleAurora
  September : pele engine picked
  October : Playground v1 : Series and palettes
  October 18 : Usage guide : 26 types
  Next : PNG export : Brand recipes`],
  ['barras', 'Barras y líneas', 'Bars & line',
`xychart-beta
  title "Stars en GitHub"
  x-axis [oct 1, oct 5, oct 10, oct 15, oct 18]
  y-axis "Estrellas" 0 --> 60
  bar [4, 12, 22, 36, 46]
  line [4, 12, 22, 36, 46]`,
`xychart-beta
  title "GitHub stars"
  x-axis [oct 1, oct 5, oct 10, oct 15, oct 18]
  y-axis "Stars" 0 --> 60
  bar [4, 12, 22, 36, 46]
  line [4, 12, 22, 36, 46]`],
  ['barras2', 'Barras · Sesiones', 'Bars · Sessions',
`xychart-beta
  title "Sesiones por dia"
  x-axis [vie, sab, dom, lun, mar]
  y-axis "Sesiones" 0 --> 120
  bar [38, 64, 51, 92, 87]
  line [38, 64, 51, 92, 87]`,
`xychart-beta
  title "Sessions per day"
  x-axis [fri, sat, sun, mon, tue]
  y-axis "Sessions" 0 --> 120
  bar [38, 64, 51, 92, 87]
  line [38, 64, 51, 92, 87]`],
  ['sankey', 'Sankey', 'Sankey',
`sankey-beta
  Texto Mermaid,pele,60
  pele,SVG Aurora,60
  Tokens Aurora,SVG Aurora,30`,
`sankey-beta
  Mermaid text,pele,60
  pele,Aurora SVG,60
  Aurora tokens,Aurora SVG,30`],
  ['sankey2', 'Sankey · Energía', 'Sankey · Energy',
`sankey-beta
  Red electrica,Calefaccion casas,113.7
  Red electrica,Industria,342.1
  Red electrica,Perdidas,56.7
  Red electrica,Exportacion,104.4
  Industria,Recuperado,42.1`,
`sankey-beta
  Electricity grid,Heating homes,113.7
  Electricity grid,Industry,342.1
  Electricity grid,Losses,56.7
  Electricity grid,Exports,104.4
  Industry,Recovered,42.1`],
  ['bloques', 'Bloques', 'Block',
`block-beta
  columns 3
  a["Editor"] b["pele"] c["SVG"]
  d["Tokens Aurora"] e["Tu theme.css"] f["Tu web"]`,
`block-beta
  columns 3
  a["Editor"] b["pele"] c["SVG"]
  d["Aurora tokens"] e["Your theme.css"] f["Your site"]`],
  ['bloques2', 'Bloques · Mosaico', 'Block · Mosaic',
`block-beta
  columns 3
  logo["Aurora"]:3
  ed["Editor"] ln["Lienzo"] ins["Inspector"]
  espacio:3
  pie1["FAQ"]:1 pie2["Docs"]:1 pie3["GitHub"]:1`,
`block-beta
  columns 3
  logo["Aurora"]:3
  ed["Editor"] cv["Canvas"] ins["Inspector"]
  space:3
  f1["FAQ"]:1 f2["Docs"]:1 f3["GitHub"]:1`],
  ['paquetes', 'Paquetes', 'Packet',
`packet-beta
  0-7: "Versión"
  8-15: "Tipo"
  16-31: "Longitud"
  32-63: "Carga útil"`,
`packet-beta
  0-7: "Version"
  8-15: "Type"
  16-31: "Length"
  32-63: "Payload"`],
  ['paquetes2', 'Paquete · Bits', 'Packet · Bits',
`---
config:
  packet:
    showBits: true
    bitsPerRow: 16
---
packet-beta
  0-7: "Version"
  8-15: "Cabecera"
  16-23: "Tipo"
  24-31: "Flujo"
  32-63: "Carga util"`,
`---
config:
  packet:
    showBits: true
    bitsPerRow: 16
---
packet-beta
  0-7: "Version"
  8-15: "Header"
  16-23: "Type"
  24-31: "Flow"
  32-63: "Payload"`],
  ['kanban', 'Kanban', 'Kanban',
`kanban
  Hecho
    Motor pele: [listo]
  En curso
    Skin Aurora: [activo]
    Playground: [activo]
  Por hacer
    Exportar PNG: [idea]`,
`kanban
  Done
    pele engine: [ready]
  In progress
    Aurora skin: [active]
    Playground: [active]
  To do
    PNG export: [idea]`],
  ['kanban2', 'Kanban · Tickets', 'Kanban · Tickets',
`---
config:
  kanban:
    ticketBaseUrl: 'https://example.com/browse/#TICKET#'
---
kanban
  Por hacer
    id1[Disenar icono]@{ ticket: PA-101, priority: 'High' }
    id2[Medir rendimiento]@{ ticket: PA-102 }
  En curso
    id3[Guia ilustrada]@{ ticket: PA-103, assigned: 'david' }
  Hecho
    id4[26 tipos verificados]@{ ticket: PA-099 }`,
`---
config:
  kanban:
    ticketBaseUrl: 'https://example.com/browse/#TICKET#'
---
kanban
  Todo
    id1[Design icon]@{ ticket: PA-101, priority: 'High' }
    id2[Benchmark]@{ ticket: PA-102 }
  In progress
    id3[Illustrated guide]@{ ticket: PA-103, assigned: 'david' }
  Done
    id4[26 verified types]@{ ticket: PA-099 }`],
  ['radar', 'Radar', 'Radar',
`radar-beta
  axis v["Veloz"], b["Bello"], l["Ligero"]
  curve c1["pele"]{v: 95, b: 90, l: 98}
  curve c2["mermaid.js"]{v: 55, b: 60, l: 35}
  max 100`,
`radar-beta
  axis v["Fast"], b["Pretty"], l["Light"]
  curve c1["pele"]{v: 95, b: 90, l: 98}
  curve c2["mermaid.js"]{v: 55, b: 60, l: 35}
  max 100`],
  ['radar2', 'Radar · Tres series', 'Radar · Three series',
`radar-beta
  axis v["Veloz"], b["Bello"], l["Ligero"], s["Sencillo"]
  curve pele{v: 95, b: 90, l: 98, s: 88}
  curve mermaid{v: 55, b: 60, l: 35, s: 70}
  curve drawio{v: 40, b: 50, l: 25, s: 45}
  max 100`,
`radar-beta
  axis v["Fast"], b["Pretty"], l["Light"], s["Simple"]
  curve pele{v: 95, b: 90, l: 98, s: 88}
  curve mermaid{v: 55, b: 60, l: 35, s: 70}
  curve drawio{v: 40, b: 50, l: 25, s: 45}
  max 100`],
  ['arquitectura', 'Arquitectura', 'Architecture',
`architecture-beta
  group nube(cloud)[Navegador]
  service web(server)[Playground] in nube
  service pele(database)[Motor pele] in nube`,
`architecture-beta
  group browser(cloud)[Browser]
  service web(server)[Playground] in browser
  service pele(database)[pele engine] in browser`],
  ['arquitectura2', 'Arquitectura · Grupos', 'Architecture · Groups',
`architecture-beta
  group fuentes(cloud)[Fuentes]
    service git(server)[Git] in fuentes
    service cdn(cloud)[CDN] in fuentes
  group sitio(server)[Sitio]
    service pagina(server)[Playground] in sitio
    service guia(server)[Guia] in sitio
  group datos(database)[Datos]
    service ejemplos(database)[ejemplos.js] in datos`,
`architecture-beta
  group sources(cloud)[Sources]
    service git(server)[Git] in sources
    service cdn(cloud)[CDN] in sources
  group site(server)[Site]
    service page(server)[Playground] in site
    service guide(server)[Guide] in site
  group data(database)[Data]
    service examples(database)[examples.js] in data`],
  ['git', 'Git', 'Git',
`gitGraph
  commit id: "Skin Aurora"
  branch playground
  commit id: "Panel"
  commit id: "i18n"
  checkout main
  merge playground`,
`gitGraph
  commit id: "Aurora skin"
  branch playground
  commit id: "Panel"
  commit id: "i18n"
  checkout main
  merge playground`],
  ['git2', 'Git · Merge', 'Git · Merge',
`gitGraph
  commit id: "base"
  branch paletas
  commit id: "5 paletas"
  checkout main
  merge paletas id: "merge paletas"
  branch guia
  commit id: "fichas"
  checkout main
  merge guia id: "merge guia"
  commit id: "26 tipos" tag: "v2" `,
`gitGraph
  commit id: "base"
  branch palettes
  commit id: "5 palettes"
  checkout main
  merge palettes id: "merge palettes"
  branch guide
  commit id: "cards"
  checkout main
  merge guide id: "merge guide"
  commit id: "26 types" tag: "v2"`],
  ['requisitos', 'Requisitos', 'Requirement',
`requirementDiagram
  requirement rapido {
    id: 1
    text: Renderizar en menos de 300 ms
    risk: low
    verifymethod: test
  }
  element playground {
    type: web
  }`,
`requirementDiagram
  requirement fast {
    id: 1
    text: Render in under 300 ms
    risk: low
    verifymethod: test
  }
  element playground {
    type: web
  }`],
  ['requisitos2', 'Requisitos · Riesgos', 'Requirements · Risks',
`requirementDiagram
  requirement fiable {
    id: 1
    text: Cero errores de sintaxis en los 52 ejemplos
    risk: high
    verifymethod: inspection
  }
  requirement rapido {
    id: 2
    text: Renderizar en menos de 300 ms
    risk: low
    verifymethod: test
  }
  element lienzo {
    type: web
  }`,
`requirementDiagram
  requirement reliable {
    id: 1
    text: Zero syntax errors in all 52 examples
    risk: high
    verifymethod: inspection
  }
  requirement fast {
    id: 2
    text: Render in under 300 ms
    risk: low
    verifymethod: test
  }
  element canvas {
    type: web
  }`],
  ['c4', 'C4 (componentes)', 'C4 (components)',
`C4Component
title Diagrama de componentes - App
Container(web, "Aplicación web", "javascript y vue", "Toda la funcionalidad del producto en el navegador.")
Container(api, "API", "java y spring", "Expone la funcionalidad del producto por API.")
Rel(web, api, "Usa", "JSON/HTTPS")`,
`C4Component
title Component diagram - App
Container(web, "Web app", "javascript and vue", "All product functionality in the browser.")
Container(api, "API", "java and spring", "Exposes product functionality over an API.")
Rel(web, api, "Uses", "JSON/HTTPS")`],
  ['c42', 'C4 · Contexto', 'C4 · Context',
`C4Context
title Contexto del producto
Person(usuario, "David", "Autor y unico usuario.")
System(paurora, "PeleAurora", "Playground de diagramas Mermaid.")
Rel(usuario, paurora, "Usa", "Navegador")`,
`C4Context
title Product context
Person(user, "David", "Author and only user.")
System(paurora, "PeleAurora", "Mermaid diagram playground.")
Rel(user, paurora, "Uses", "Browser")`],
  ['eventos', 'Event modeling', 'Event modeling',
`eventmodeling

timeframe 01 ui CarritoUI
timeframe 02 command AnadirItem [[AnadirItem01]]
timeframe 03 event ItemAnadido [[ItemAnadido]]

data AnadirItem01 {
  description: 'john'
  price: 20.4
}`,
`eventmodeling

timeframe 01 ui CartUI
timeframe 02 command AddItem [[AddItem01]]
timeframe 03 event ItemAdded [[ItemAdded]]

data AddItem01 {
  description: 'john'
  price: 20.4
}`],
  ['eventos2', 'Event modeling · Procesador', 'Event modeling · Processor',
`eventmodeling

timeframe 01 ui CarritoUI
timeframe 02 command AnadirItem
timeframe 03 event ItemAnadido

resetframe 04 event Ext.InventarioCambiado
timeframe 05 processor Procesador
timeframe 06 command CambiarInventario
timeframe 07 event InventarioCambiado`,
`eventmodeling

timeframe 01 ui CartUI
timeframe 02 command AddItem
timeframe 03 event ItemAdded

resetframe 04 event Ext.InventoryChanged
timeframe 05 processor Processor
timeframe 06 command ChangeInventory
timeframe 07 event InventoryChanged`],
  ['agentflow', 'Agentflow', 'Agentflow',
`agentflow-beta TB
  connector llm["API LLM"]
  llm@{ protocol: "http", endpoint: "https://api.ejemplo.com/chat" }

  flow equipo_cafe["Equipo de café"]
    ciudad["ciudad"]@{ shape: input, value: "Estocolmo" }

    flow investigador["Investigador"]
      buscar["buscar_ubicacion"]@{ shape: tool, params: "ciudad :: String" }
    end
  end`,
`agentflow-beta TB
  connector llm["LLM API"]
  llm@{ protocol: "http", endpoint: "https://api.example.com/chat" }

  flow coffee_team["Coffee Team"]
    city["city"]@{ shape: input, value: "Stockholm" }

    flow researcher["Researcher"]
      search["search_location"]@{ shape: tool, params: "city :: String" }
    end
  end`],
  ['agentflow2', 'Agentflow · Paso a paso', 'Agentflow · Step by step',
`agentflow-beta TB
  flow asistente["Asistente"]
    pregunta["pregunta"]@{ shape: input, value: "Que tiempo hace?" }
    tool1["clima"]@{ shape: tool, params: "ciudad :: String" }
  end`,
`agentflow-beta TB
  flow assistant["Assistant"]
    question["question"]@{ shape: input, value: "How is the weather?" }
    tool1["weather"]@{ shape: tool, params: "city :: String" }
  end`],
  ['cynefin', 'Cynefin (dominios)', 'Cynefin (domains)',
`cynefin-beta
  title Clasificación de estrategias

  complex
    "Investigación de mercado"

  complicated
    "Análisis competitivo"

  clear
    "Precios estándar"

  complex --> complicated : "Patrón identificado"
  complicated --> clear : "Práctica codificada"`,
`cynefin-beta
  title Strategy Categorization

  complex
    "Market research"

  complicated
    "Competitive analysis"

  clear
    "Standard pricing"

  complex --> complicated : "Pattern identified"
  complicated --> clear : "Best practice codified"`],
  ['cynefin2', 'Cynefin · Ciclo', 'Cynefin · Loop',
`cynefin-beta
  title El ciclo completo

  clear
    "Actualizar version"

  chaotic
    "Incidente en produccion"

  complex --> complicated : "Patron identificado"
  complicated --> clear : "Mejor practica"
  clear --> chaotic : "Complacencia"
  chaotic --> complex : "Estabilizado"`,
`cynefin-beta
  title The full loop

  clear
    "Bump version"

  chaotic
    "Prod incident"

  complex --> complicated : "Pattern found"
  complicated --> clear : "Best practice"
  clear --> chaotic : "Complacency"
  chaotic --> complex : "Stabilized"`],
  ['ishikawa', 'Ishikawa (causa-efecto)', 'Ishikawa (cause-effect)',
`ishikawa-beta
    Foto borrosa
    Proceso
        Enfoque fuera de plano
        Obturador demasiado lento
    Usuario
        Manos temblorosas
    Equipo
        Lente sucio`,
`ishikawa-beta
    Blurry Photo
    Process
        Out of focus
        Shutter speed too slow
    User
        Shaky hands
    Equipment
        Dirty lens`],
  ['ishikawa2', 'Ishikawa · Profundo', 'Ishikawa · Deep',
`ishikawa-beta
    Deploy lento
    Codigo
        Duplicacion
            Copiar-pega sin refactor
        Bundle grande
    Pruebas
        Suite lenta
        Flaky
    Proceso
        Cola de CI
        Revisiones estancadas`,
`ishikawa-beta
    Slow deploy
    Code
        Duplication
            Copy-paste without refactor
        Large bundle
    Tests
        Slow suite
        Flaky
    Process
        CI queue
        Stalled reviews`],
  ['wardley', 'Wardley (mapa)', 'Wardley (map)',
`wardley-beta
title Tienda de te
anchor Cliente [0.95, 0.7]
component Te [0.8, 0.85]
component Hervidor [0.62, 0.45]`,
`wardley-beta
title Tea shop
anchor Customer [0.95, 0.7]
component Tea [0.8, 0.85]
component Kettle [0.62, 0.45]`],
  ['wardley2', 'Wardley · Evolución', 'Wardley · Evolve',
`wardley-beta
title Cafeteria
anchor Cliente [0.95, 0.7]
component Maquina [0.55, 0.4]
component Cafe [0.8, 0.85]
component Grano [0.35, 0.62]
evolve Cafe 0.95`,
`wardley-beta
title Coffee shop
anchor Customer [0.95, 0.7]
component Machine [0.55, 0.4]
component Coffee [0.8, 0.85]
component Beans [0.35, 0.62]
evolve Coffee 0.95`],
];
