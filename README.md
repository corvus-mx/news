# Corvus News - Sistema Modular con Astro

## 🚀 Cómo agregar noticias fácilmente

### Estructura de carpetas para noticias:

```
src/content/feeds/
├── soberania/
│   ├── 2025-001/
│   │   └── index.md
│   ├── 2025-002/
│   │   └── index.md
│   └── ...
├── corrupcion-justicia/
│   ├── 2025-001/
│   │   └── index.md
│   └── ...
├── internacional-geopolitica/
│   └── ...
└── crimen-organizado/
    └── ...
```

### Para agregar una nueva noticia:

1. **Crea una nueva carpeta** con el formato `2025-XXX` (donde XXX es el número consecutivo)
2. **Dentro de la carpeta**, crea un archivo `index.md`
3. **Usa este formato** para el archivo:

```markdown
---
title: "Título de tu noticia"
excerpt: "Resumen breve de la noticia que aparecerá en las tarjetas"
date: "2025-01-16T10:30:00Z"
author: "Corvus"
featured: true
tags: ["tag1", "tag2", "tag3"]
---

Aquí va el contenido completo de tu noticia en Markdown.

## Puedes usar subtítulos

Y todo el formato de Markdown que necesites.

**Texto en negrita**, *cursiva*, listas, etc.
```

### Ejemplo práctico:

Para agregar una nueva noticia de soberanía:

1. Crea: `src/content/feeds/soberania/2025-002/index.md`
2. Agrega el contenido con el frontmatter
3. ¡Listo! La noticia aparecerá automáticamente en:
   - Página principal (si es la más reciente)
   - Sección de soberanía
   - Página de todas las noticias

### Características automáticas:

- ✅ **Detección automática** de la noticia más reciente
- ✅ **Generación automática** de URLs (`/feeds/soberania/2025-002/`)
- ✅ **Colores por categoría** automáticos
- ✅ **Ordenamiento por fecha** automático
- ✅ **Responsive** en todos los dispositivos
- ✅ **SEO optimizado**

### Comandos:

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Categorías disponibles:

- `soberania` - Color verde (#00cc66)
- `corrupcion-justicia` - Color naranja (#ff9500)  
- `internacional-geopolitica` - Color azul (#007acc)
- `crimen-organizado` - Color rojo (#cc0000)

¡Solo necesitas crear las carpetas con las noticias y el sistema se encarga del resto!