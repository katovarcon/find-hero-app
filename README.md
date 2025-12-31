## 🦸‍♀️ FINDHERO – Multiverse Explorer
Una aplicación web interactiva para explorar, buscar y coleccionar superhéroes de múltiples universos.
Este proyecto fue diseñado con una estética Cyberpunk + Cómic, pensado para fans del multiverso, la tecnología y las interfaces que se sienten vivas.
No es solo un buscador:
es una experiencia visual, rápida, intuitiva y divertida.

## 🚀 ¿Qué es FINDHERO?
FINDHERO es una SPA (Single Page Application) construida con JavaScript moderno (ES Modules) que consume la API pública:
https://akabab.github.io/superhero-api/api/all.json

Permite:
Buscar superhéroes en tiempo real
Ordenarlos alfabéticamente
Explorar fichas técnicas detalladas
Guardar favoritos
Navegar por cientos de personajes sin recargar la página
Usar Dark Mode
Disfrutar de una UI animada estilo cómic/cyberpunk

## 🧠 Filosofía del proyecto
Este proyecto no fue hecho para verse “correcto”.
Fue hecho para verse emocionante.

La interfaz:
- Usa colores neón (cyan, fucsia y dorado)
- Tiene fondo animado en video
- Tiene resplandores según el tipo de héroe
- Reacciona al usuario (hover, glow, cursor personalizado)
- Funciona igual de bien en desktop y móvil

La idea es que al abrirlo se sienta como entrar a un archivo secreto del multiverso.

## ✨ Funcionalidades principales
🔎 Búsqueda y filtros
- Búsqueda por nombre en tiempo real
- Botón BUSCAR

Ordenamiento:
- A–Z
- Z–A
- Los resultados se mantienen al abrir y cerrar fichas

## 📚 Paginación avanzada
- 20 héroes por página
Controles completos:
- << Primera
- < Anterior
- > Siguiente
- >> Última
- Selector de página dinámico

HUD visual:
- Página X de Y

## 🃏 Tarjetas de héroes
Cada héroe se muestra como una card interactiva:
- Imagen
- Nombre
- Botón de favorito ⭐

Borde y resplandor según alineación:
| Alineación | Color  |
| ---------- | ------ |
| Good       | Cyan   |
| Bad        | Fucsia |
| Neutral    | Dorado |

Esto permite identificar visualmente si un personaje es héroe, villano o neutral.

## 🧬 Ficha técnica (Modal)
Al hacer clic en una tarjeta se abre una ficha con:

- Imagen grande
- Nombre completo
- Conexiones
- Power stats
- Diseño responsive:
- Móvil: scroll vertical
- Desktop: ficha amplia y clara

Todo sin recargar la página.

## ⭐ Favoritos
Una de las secciones más importantes del proyecto.
- Los héroes marcados se guardan en localStorage
- Aparecen en una barra superior
- Scroll horizontal
- Botón para quitarlos
- Siempre visibles
- Título destacado en cyan

Esto convierte la app en una especie de colección personal del multiverso.

## 🌗 Dark Mode
Un botón con icono ☀️ / 🌙 permite cambiar entre:
- Modo claro
- Modo oscuro

La preferencia se guarda en localStorage y se mantiene entre sesiones.

## 🎯 Cursor personalizado (Desktop)
En PC, el puntero se convierte en una mira futurista que sigue el mouse, reforzando la sensación de interfaz sci-fi.

## 🛠️ Tecnologías utilizadas
- HTML5 semántico
- CSS3
- Animaciones
- Glow
- Transiciones
- Layout responsive
- JavaScript ES6 Modules
- Fetch API
- LocalStorage
- API pública de superhéroes
- Git + GitHub

## 🗂️ Estructura del proyecto

HERO-FINDER/
│
├── assets/
│   ├── background.mp4
│   └── logo.png
│
├── css/
│   └── styles.css
│
├── js/
│   ├── cursor.js
│   ├── dark-mode.js
│   ├── fetch.js
│   ├── filters.js
│   ├── favorites.js
│   ├── main.js
│   ├── modal.js
│   ├── paginated.js
│   └── render.js
│
├── index.html
└── README.md

## ⚙️ Instalación y uso
Como el proyecto usa ES Modules, debe ejecutarse en un servidor local.

1️⃣ Clonar el repo
git clone https://github.com/katovarcon/find-hero-app.git

2️⃣ Abrir en VS Code
cd hero-finder
code .

3️⃣ Ejecutar con Live Server
Instala la extensión Live Server
Click derecho en index.html
Open with Live Server

## 🏆 Desafíos implementados
Este proyecto cumple y supera todos los requisitos:

✅ Búsqueda funcional

✅ Ordenamiento

✅ Paginación real

✅ Selector de páginas

✅ Estado de botones

✅ Persistencia al usar modales

✅ Favoritos con LocalStorage

✅ Dark Mode

✅ Responsive

✅ UI temática

✅ Fondo animado

✅ UX cuidada

## 👩‍💻 Autora
Karla Tovar - Frontend Developer

Amante del diseño, los superhéroes y las interfaces que cuentan historias.
Este proyecto refleja no solo código que he aprendido, sino también la personalidad, criterio visual y experiencia construyendo productos que se sienten vivos.
