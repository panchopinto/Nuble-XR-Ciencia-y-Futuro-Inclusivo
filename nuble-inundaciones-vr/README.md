# Proyecto 2 — Inundaciones y crecidas (VR/AR)

Incluye:
- **VR** (`web/index.html`): Terreno 3D + overlays de agua **Antes/Después** con control de opacidad.
- **AR** (`web/ar.html`): Coloca el terreno en el mundo real y alterna **Antes/Después**.
- **assets/**: `terrain.obj`, `colormap.png`, `heightmap.png`, `flood_pre.png`, `flood_post.png`.

## Flujo con datos reales
1. A partir de Sentinel‑1 (backscatter) y un DEM, genera un **heightmap** normalizado (0‑255).
2. Define máscaras binarizadas **pre**/**post** a partir de umbrales (o clasificador) sobre el backscatter.
3. Exporta `terrain.obj` desde el heightmap y guarda las máscaras como `flood_pre.png` y `flood_post.png`.
4. Abre `web/index.html` (VR) o `web/ar.html` (AR).

> Este paquete incluye datos sintéticos para funcionar sin dependencias externas.
