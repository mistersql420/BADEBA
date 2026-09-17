# Traspaso de proyecto — BADEBA SUPPLIES

Contexto acumulado durante trabajo con Claude Code, para continuar con cualquier otra herramienta (Codex u otra).

## Qué es este proyecto

Sitio estático de una sola página para **BADEBA SUPPLIES** ("Skull Collection"), un catálogo de presentaciones en Bahía de Banderas. Todo vive en `index.html`:

- Tailwind CSS vía CDN (`<script src="https://cdn.tailwindcss.com">`), sin build step.
- GSAP + ScrollTrigger + Lenis (smooth scroll) vía CDN.
- Fuentes: **Syne** (display/headings) + **Inter** (body) — vía Google Fonts. No agregar fuentes adicionales.
- Tokens de color fijos: `--acid: #7cfc00` (verde ácido), `--black: #050705`, color Tailwind `badeba: '#7CFC00'`.
- Video de fondo con crossfade continuo + fondos de escena por sección (`.video-stage`, `.scroll-scene-backgrounds`) — no tocar su estructura.
- Catálogo de 9 productos (`catalogProducts` en el `<script>` final) con carrito de demostración (localStorage, sin cobros reales), modal de detalle de producto, checkout simulado, FAB de WhatsApp y un widget de chat con respuestas por palabras clave (no es IA real).

Archivos relevantes fuera de `index.html`:
- `telegram-bot.js` + `TELEGRAM-BOT.md` + `.env.example` — bot de Telegram aparte, no relacionado con el sitio.
- `assets/`, `skull fotos/` — imágenes y video del catálogo.
- `design-inspiration/exoticmarketpv-design/` — salida de la herramienta `skillui` (análisis estático del sitio exoticmarketpv.com): `DESIGN.md`, `SKILL.md`, screenshots, fuentes. Se usó **solo como referencia de patrones estructurales** (tipos de sección, componentes tipo Card/Badge/FAQ), nunca para copiar su paleta de colores ni tipografías.

## Git / GitHub

- Repo local inicializado, commit inicial: `e2407ba`.
- Remoto: `https://github.com/mistersql420/BADEBA` (privado).
- Identidad de git configurada globalmente: `user.name = mistersql420`, `user.email = bafalml@gmail.com`.
- Herramientas instaladas en el sistema para esto: **GitHub CLI (`gh`)**, autenticado como `mistersql420`; **skillui** (`npm i -g skillui`) para extraer sistemas de diseño de sitios de referencia.

## Estado actual — trabajo EN PROGRESO, sin commitear

`index.html` tiene cambios sin commitear (`git status` los muestra). Es una migración de **patrones estructurales** (no visuales) desde `design-inspiration/exoticmarketpv-design`, pedida explícitamente así: adoptar tipos de sección/componentes, pero manteniendo 100% la paleta y tipografías propias de BADEBA. Reglas duras que se siguieron y deben mantenerse si se sigue tocando este archivo:

- No modificar `tailwind.config`, `--acid`, `--black`, ni las fuentes Syne/Inter.
- No introducir colores fuera de la paleta actual.
- No tocar `.video-stage`, `.scroll-scene-backgrounds` ni la estructura del header.

Cambios ya aplicados (pendientes de validación visual del usuario antes de commitear):
1. **`:focus-visible` global** (anillo verde ácido) en `a`/`button`/`[tabindex]` — mejora accesibilidad de teclado.
2. **Componente `.badge`** reusable (pill verde ácido) — reemplazó spans sueltos duplicados en el modal de producto y en las tarjetas del catálogo.
3. **Sección `#menu`** (nueva, justo después de `#productos`): lista tipo menú de los mismos 9 productos, **sin fotos** — reutiliza `catalogProducts`, `formatPrice` y el modal de detalle ya existentes (clic en una fila abre la misma ficha de producto).
4. **Sección `#faq`** (nueva, entre `#nosotros` y `#contacto`): acordeón de 4 preguntas frecuentes, accesible (`aria-expanded`/`aria-controls`), respeta `prefers-reduced-motion`, con enlace "FAQ" agregado al nav del header.

**Siguiente paso pendiente**: el usuario debe abrir `index.html` en el navegador, revisar `#menu` y `#faq` en desktop y mobile, y confirmar que se ve bien. Después de esa validación, se debe hacer **un solo commit dedicado** a esta migración (no mezclado con otros cambios), para poder revertirlo solo con `git revert` si algo se ve mal.

## Decisiones ya tomadas (no re-preguntar)

- Se decidió **NO** crear una sección de "Cards" genérica separada del catálogo — solo se harmonizó el catálogo existente (`.catalog-card`) con el patrón Card de referencia (accesibilidad/focus), sin duplicar estructura.
- La sección `#menu` (lista sin fotos) sí se agregó como sección nueva y separada, por petición explícita posterior del usuario.
- Preferencia explícita del usuario: **antes de generar código de UI, mostrar primero una vista previa/mockup y preguntar** — no asumir y generar directo.
