# ReactDev-Challenges-ALevel
React Developer Challenges

# Prueba técnica — React developer


## 🎯 Objetivo

El objetivo de esta prueba técnica es que el candidato muestre sus habilidades para verificar las habilidades de desarrollo front-end utilizando React y su capacidad para resolver problemas.

Pondremos el foco en obtener un **código simple, bien diseñado, organizado y eficaz**, así como el cumplimiento de todos los requerimientos solicitados.

Como empresa, creemos que la comunicación es la clave del éxito. Entonces, si algo no está claro, o si tiene dudas sobre la tarea, consultanos!


## 🗒 Desarrollo del proyecto

- Se pueden utilizar herramientas como [vite](https://github.com/vitejs/vite) o similares para inicializar el proyecto.

- Se deberá incluir un **README** con instrucciones de configuración/ejecución y cualquier prueba u otra documentación que haya creado como parte de su solución. Además, agregue la siguiente información:
    - ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
    - ¿Hay alguna mejora que pueda hacer en su envío?
    - ¿Como mejorar la aplicación?

- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.

## 📚 Requisitos de Stack

Para el desarrollo de la aplicación deberá utilizar:

- React / React Hooks
- [Context API](https://reactjs.org/docs/context.html)
- Framework de estilos de su preferencia
- Mobile friendly
- Manejo de errores
- _(opcional)_ Deploy automático
- Se pueden utilizar otras librerías que crea conveniente, aunque se recomienda proporcionar una solución básica ajustada a lo solicitado, ya que nuestro objetivo principal es evaluar sus habilidades con React y Javascript.

## 👨‍💻 Prueba técnica
Necesitará construir las siguientes 2 páginas con React:

- Una página de "Inicio" mostrando un listado de tareas por hacer
- Una página de "Formulario" para agregar una nueva tarea o editar una existente

Las páginas también deben poder utilizarse en dispositivos móviles.

Puede suponer que no tiene que admitir navegadores heredados sin funciones como `fetch` o `flexbox`.

### 💾 Modelos de datos
Los datos deben ser almacenados en [localstorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

- Etiquetas:
    - id
    - nombre

- Tareas :
    - id
    - descripcion
    - fecha de terminación
    - Estado (terminado/pendiente)
    - Etiquetas (Una taera puede tener muchas etiquetas)

### 1️⃣ Página de “Inicio”

Esta sera la pagína principal de la applicación, debera permitir:

- Mostar el listado de tareas por realizar ordenadas por id
- Filtrar por (solo aplica un filtro a la vez):
    - etiquetas
    - estado
    - por vencer hoy
- Crear una nueva tarea
- Elimiar una tarea existente

### 2️⃣ Página “Formulario”

Debe permitir:
- Crear una nueva tarea o editar una existente
- Contar con validación

🤝 Happy coding




## DOCUMENTATION DANIEL LOBO

## Version NodeJs
16.17.1

## Manejador de paquete 
Yarn

## Lenguaje
TypeScript

## Framework de estilos
Antd desing

## compilador 
Vite