# ShenQi

Aplicacion offline de entrenamiento tipo Duolingo/Babbel para preparar la acreditacion MINSAL de acupuntura.

## Contenido inicial

- 559 preguntas importadas desde `Base de datos pregunta minsal.xlsx`.
- Practica por modulo.
- Progreso por niveles: al terminar un bloque, la siguiente practica usa preguntas nuevas del modulo y deja los errores para recuperacion final.
- Juegos interactivos: contra reloj, tarjetas rapidas y memoria pregunta-respuesta.
- Simulacro MINSAL con preguntas mezcladas y vidas limitadas.
- Modulos nuevos para Salud Occidental, Legislacion/Normativa y Sistema de Salud.
- Banco inicial de preguntas por modulo, incluyendo 48 preguntas semilla para los modulos nuevos.
- Racha diaria y sonidos de acierto/error con opcion de silencio.
- Repaso de errores guardado en `localStorage`.
- Textos originales ShenQi como base principal de estudio.
- Imagenes resumen agregadas desde `~/Desktop/minsal1/imagenes resumenes`.
- Lector de lecciones con mapas visuales, diagramas, tablas y audio del navegador.
- Carga opcional desde Supabase para mantener preguntas/respuestas como fuente unica revisable, con fallback offline local.

## Supabase

Se agrego un esquema y exportador para migrar el Excel a Supabase:

```bash
python3 tools/export_excel_to_supabase.py
```

El CSV queda en `data/supabase_questions.csv`. Sigue las instrucciones en `supabase/README.md`.

## Uso

Abre `index.html` en el navegador. No requiere servidor ni instalacion.

## Uso desde celular

Con el Mac y el celular en la misma red Wi-Fi, levanta el servidor desde esta carpeta:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Luego abre en el celular:

```text
http://192.168.1.200:8000/index.html?v=15
```

En iPhone puedes tocar Compartir y luego Agregar a pantalla de inicio. En Android puedes usar Instalar app o Agregar a pantalla principal desde el menu del navegador.

## Fuente

El material base esta en `/Users/Pautrabajo/Desktop/minsal1`.
