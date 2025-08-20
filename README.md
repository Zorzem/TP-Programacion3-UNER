# Trabajos Prácticos – Programación 3

## Tecnicatura Universitaria en Desarrollo Web  
**Facultad de Ciencias de la Administración – UNER**  
**Segundo cuatrimestre 2025**

## Materia  
**Programación 3**

## Integrantes del grupo (Usuario Github)
- **Boris Kovalow (Zorzem)**
- **Giuliano Daniele (Vitruviansky)** 
- **Jose Herrera (joseherreraa1)**
- **Matias Godoy (Kbzgames)**
- **Virginia Alejandra Ponce (CodeGinny)**

---

## Primera Entrega – TP 1

### Objetivos de esta entrega

Esta primera entrega tiene como objetivos principales:

- Aplicar los conceptos de **arrays en JavaScript**, usando sus métodos comunes y avanzados.
- Ejecutar el código en el entorno **Node.js** para simular la gestión de un conjunto de datos.
- Realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y otras transformaciones sobre arrays.
- Profundizar en la manipulación de datos utilizando métodos como `for...of`, `forEach()`, `push()`, `pop()`, `unshift()`, `shift()`, `filter()`, `map()`, `find()`, y `sort()`.

---

### Descripción del trabajo

El trabajo consiste en crear un script JavaScript (`gestionDatos.js`) que simule la gestión de una pequeña "base de datos" de elementos (por ejemplo, productos, películas, turnos, etc.) utilizando arrays, en nuestro caso utilizamos películas. 

Se deben implementar y demostrar diferentes operaciones sobre el array, tales como:

- Imprimir la longitud total del array.
- Acceder y mostrar elementos específicos por índice.
- Recorrer el array con bucles y métodos.
- Agregar y eliminar elementos al inicio y final del array.
- Filtrar y mapear elementos según condiciones específicas.
- Buscar elementos específicos.
- Ordenar el array por alguna propiedad.

---

### Instrucciones para ejecutar el trabajo

1. Asegurarse de tener instalado **Node.js** en el equipo. Se puede descargar desde [https://nodejs.org](https://nodejs.org).

2. Abrir una terminal o consola y ubicarse en la carpeta `TP1` donde se encuentra el archivo `gestionDatos.js`.

3. Ejecutar el siguiente comando para correr el script y visualizar los resultados en consola:

```bash
node gestionDatos.js
```
---

## Segunda Entrega – TP 2

## Objetivos
- Aplicar los conceptos del **API Fetch** en JavaScript.  
- Manejar archivos con **FileSystem (fs)**.  
- Ejecutar el código en el entorno **Node.js**.  
- Realizar operaciones CRUD (GET, POST, PUT, DELETE) sobre una API real.  
- Persistir la información obtenida en un archivo local JSON y manipularla.

---

## Descripción
Este trabajo consiste en desarrollar un script en JavaScript (`apiFetch.js`) que interactúe con la API pública [Fake Store API](https://fakestoreapi.com/).  

El script debe realizar consultas a la API utilizando **fetch** y persistir la información en un archivo JSON con **FileSystem**.  
Luego, sobre ese archivo, se realizarán operaciones adicionales.

---

## Consigna

### Parte 1 – API Fetch
- Recuperar la información de todos los productos (**GET**).  
- Recuperar la información de un número limitado de productos (**GET**).  
- Persistir los datos obtenidos en un archivo local JSON.  
- Agregar un nuevo producto (**POST**).  
- Buscar un producto por su `id` (**GET**).  
- Eliminar un producto (**DELETE**).  
- Modificar los datos de un producto (**PUT/UPDATE**).  

### Parte 2 – FileSystem
- Utilizando el archivo JSON creado en el punto anterior:  
  - Agregar un producto al archivo local.  
  - Eliminar los productos cuyo precio sea mayor a un valor determinado.  

Todas las operaciones deben imprimir en consola para verificar su funcionamiento.

---

## Instrucciones de ejecución
1. Verificar que **Node.js** esté instalado en el equipo.  
   - Si se utiliza Node.js 18 o superior, `fetch` está disponible de forma nativa.  
   - Si se utiliza una versión anterior, instalar la dependencia `node-fetch`:  
     ```bash
     npm install node-fetch
     ```
2. Ubicarse en la carpeta `TP2`.  
3. Ejecutar el script en consola:  

   ```bash
   node apiFetch.js
   ```