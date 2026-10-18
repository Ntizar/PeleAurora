# PeleAurora 🌋✨

Diagramas Mermaid con el diseño de [Aurora](https://github.com/Ntizar/Aurora).

**Playground:** https://ntizar.github.io/PeleAurora/

Escribe Mermaid → SVG instantáneo (motor [pele](https://pele.run), 230 kB, cero
dependencias, 0.05–0.3 ms) vestido con los tokens de Aurora. Edita colores, radio
de esquina y grosor de línea en el panel derecho y exporta tu `theme.css`.

## Uso en tu proyecto

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/Aurora@v9.2.0/tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Ntizar/PeleAurora@main/theme-aurora.css">
<script src="https://cdn.jsdelivr.net/npm/pele@1.6.0/dist/pele.global.js"></script>

<div class="pele" id="diagrama"></div>
<script>
  pele.mount(document.querySelector('#diagrama'), `flowchart LR
  A[Mermaid] --> B[SVG con Aurora]`);
</script>
```

Con npm: `npm install pele` y `import { mount } from 'pele'`.

## El skin

`theme-aurora.css` mapea las variables `--pele-*` a los tokens `--nz-*`:

| Variable pele | Token Aurora |
|---|---|
| `--pele-fg` | `--nz-text` |
| `--pele-surface` | `--nz-gray-50` |
| `--pele-border` | `--nz-border-strong` |
| `--pele-accent` | `--nz-brand` |
| `--pele-radius` | `--nz-radius-sm` |
| `--pele-font` | `--nz-font` (Inter self-hosted) |
| `--pele-series-1..8` | paleta marca/acento Aurora |

El SVG referencia variables CSS: cambia el tema (light/dark) y los diagramas se
recolorean solos, sin re-renderizar.

## Personalizar

En el playground, doble clic en un color-picker lo devuelve al valor de Aurora.
«Descargar theme.css» te da el bloque `.pele { … }` exacto con tu tema.
Comparte tu obra con «Copiar enlace» (la fuente viaja en el hash, como en pele.run).

## Idiomas

ES / EN conmutables desde la barra; el idioma se recuerda.

## Licencias

- Este playground: MIT
- [pele](https://github.com/obsidianmd/pele): MIT (Obsidian)
- [Aurora](https://github.com/Ntizar/Aurora): design system de David Antizar

Hecho con ❤️ por David Antizar
