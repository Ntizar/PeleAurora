/* ============================================================
   PeleAurora — ejemplos compartidos
   Una sola fuente de verdad: el playground (app.js) y la guía
   (guia.js) importan esta lista.
   Formato de cada entrada:
   [clave, nombre ES, nombre EN, mermaid ES, mermaid EN]
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
  ['entidad', 'Entidad-Rel.', 'ER',
`erDiagram
  CLIENTE ||--o{ PEDIDO : realiza
  PEDIDO ||--|{ LINEA : contiene
  PRODUCTO ||--o{ LINEA : aparece`,
`erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE : contains
  PRODUCT ||--o{ LINE : appears`],
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
  ['sankey', 'Sankey', 'Sankey',
`sankey-beta
  Texto Mermaid,pele,60
  pele,SVG Aurora,60
  Tokens Aurora,SVG Aurora,30`,
`sankey-beta
  Mermaid text,pele,60
  pele,Aurora SVG,60
  Aurora tokens,Aurora SVG,30`],
  ['bloques', 'Bloques', 'Block',
`block-beta
  columns 3
  a["Editor"] b["pele"] c["SVG"]
  d["Tokens Aurora"] e["Tu theme.css"] f["Tu web"]`,
`block-beta
  columns 3
  a["Editor"] b["pele"] c["SVG"]
  d["Aurora tokens"] e["Your theme.css"] f["Your site"]`],
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
  ['arquitectura', 'Arquitectura', 'Architecture',
`architecture-beta
  group nube(cloud)[Navegador]
  service web(server)[Playground] in nube
  service pele(database)[Motor pele] in nube`,
`architecture-beta
  group browser(cloud)[Browser]
  service web(server)[Playground] in browser
  service pele(database)[pele engine] in browser`],
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
];
