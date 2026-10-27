# Portal académico — 8 asignaturas y 16 semanas

Sitio estático para **GitHub Pages**. No requiere base de datos, frameworks ni servidor.

## Publicación

1. Sube el **contenido** de esta carpeta a la raíz de tu repositorio de GitHub (el archivo `index.html` debe quedar en la raíz).
2. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/(root)`.
3. Guarda y abre la URL que proporcione GitHub.

Si ya tenías otros recursos en `materiales/`, conserva esos archivos al actualizar el repositorio.

## Archivos

- `index.html`: página principal con ocho tarjetas estáticas (no desaparecen por errores en los datos).
- `cursos/*.html`: una página por asignatura.
- `datos/*.js`: **un archivo de datos por asignatura**, sin efectos sobre las demás.
- `js/curso.js`: motor compartido para mostrar unidades y semanas.
- `js/inicio.js`: buscador simple de materias.
- `css/estilos.css`: estilos adaptables.
- `materiales/`: documentos PDF y archivos descargables.

## Agregar materiales y videos

Abre por ejemplo `datos/sensores-actuadores.js`, ubica una semana, y cambia `resources: []` a:

```js
resources: [
  {
    type: 'pdf',
    label: 'Presentación — Sensores',
    url: '../materiales/sensores/clase01.pdf'
  },
  {
    type: 'youtube',
    label: 'Video de la clase',
    url: 'https://youtu.be/iw0bk1wiSXc'
  },
  {
    type: 'practica',
    label: 'Práctica 01',
    url: '../materiales/sensores/practica01.pdf'
  }
]
```

Sube los PDF a las rutas mencionadas. No publiques enlaces a archivos que no existan.

Para usar un video de YouTube, pega su dirección `https://youtu.be/ID` o `https://www.youtube.com/watch?v=ID`; se abrirá en una pestaña nueva. Puedes añadir un reproductor embebido en `cursos/*.html` si lo necesitas.

## Cambiar la organización temática

Cada archivo en `datos/` tiene `units`, que agrupa números de semanas, y `weeks`, con las 16 semanas y sus recursos. Cambia nombres y distribución de las unidades según el programa analítico real. Los temarios actuales son **propuestas orientativas** basadas en la versión anterior del portal; no son programas institucionales oficiales. Las fechas se dejan sin fijar para ajustarlas al semestre real.

## Evitar que desaparezcan las materias

La página de inicio ya contiene las ocho tarjetas en HTML estático. Cada página de curso carga solo su propio archivo `datos/NOMBRE.js`. Comprueba que no falten comas, corchetes o comillas al editar. Si rompes el archivo de una materia, solo esa página dejará de mostrar la información; el resto del portal permanecerá visible.

## Comprobación local

Para probar sin publicarlo, desde la carpeta raíz puedes ejecutar `python -m http.server 8000` y abrir `http://localhost:8000`. También se pueden abrir las páginas directamente en la mayoría de navegadores porque se utilizan scripts clásicos y rutas relativas.
