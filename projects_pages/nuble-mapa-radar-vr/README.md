# Proyecto 1 — Mapa VR Ñuble (Radar)

Este proyecto incluye una **escena VR** y una **escena AR** basadas en un terreno OBJ generado desde un heightmap.
Puedes reemplazar `assets/terrain.obj` y `assets/colormap.png` con tus datos procesados desde Sentinel‑1 / DEM.

## Estructura
- `web/index.html` → Escena **VR** (A‑Frame + WebXR).
- `web/ar.html` → Escena **AR** con **hit‑test** (toca para colocar el terreno).
- `web/assets/terrain.obj` → Malla del terreno (OBJ).
- `web/assets/colormap.png` → Textura de color por altura (PNG).
- `scripts/` → utilidades para generar malla y texturas desde tus datos.

## Reemplazar con datos reales
1. Procesa Sentinel‑1 (backscatter) y un DEM para generar un **heightmap**.
2. Convierte el heightmap a malla (OBJ) y colormap (PNG).
3. Sustituye en `web/assets/` y abre `web/index.html` (VR) o `web/ar.html` (AR).

> Nota: Este paquete trae un terreno sintético de ejemplo para que la escena funcione sin dependencias externas.
