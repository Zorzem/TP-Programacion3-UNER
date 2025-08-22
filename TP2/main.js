const fs = require("fs");

const API_URL = "https://fakestoreapi.com/products";
const JSON_FILENAME = "productos.json";

producto_nuevo = {
  id: 0,
  title: "Backpack 1",
  price: 22.25,
  description: "Your perfect pack for everyday use and walks in the forest",
  category: "clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

// GET Productos
async function getProducts(limit) {
  try {
    // Si `limit` está definido se agrega a la URL, sino trae todos los productos
    const url = limit ? `${API_URL}?limit=${limit}` : API_URL;

    const response = await fetch(url);
    const data = await response.json();

    if (limit) {
      console.log(`Limitado a ${limit} productos: `);
    } else {
      console.log("Todos los productos: ");
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error en GET Productos:", error);
  }
}

// POST Productos - Agrega nuevo producto al JSON
async function postProduct(producto_nuevo) {
  try {
    const datos = await fs.promises.readFile(`./${JSON_FILENAME}`, "utf-8"); // Esto retornará una promesa
    const productos = JSON.parse(datos);
    // Busca el mayor de los productos
    if (productos.length > 0) {
      maxId = Math.max(...productos.map((producto) => producto.id));
    }
    // Asigna un nuevo ID al producto nuevo con el ID último + 1
    producto_nuevo.id = maxId + 1;
    productos.push(producto_nuevo);
    const productosActualizados = JSON.stringify(productos, null, 2);

    await fs.promises.writeFile(`./${JSON_FILENAME}`, productosActualizados);
    console.log("Nuevo producto ingresado.");
  } catch (error) {
    console.error("Error al agregar producto:\n\n", error);
  }
}

// Guardar productos en archivo JSON
function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), "utf-8");
  console.log(`\nDatos guardados en "${filename}"`);
}

// GET producto por ID (con manejo de error)
async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const text = await response.text(); // Lee el body como texto

    // Si está vacío, el producto no exist
    // Necesario porque la API devuelve 200 aunque no exista el ID
    if (!text) {
      console.log(`Producto con ID ${id} no encontrado.`);
      return null;
    }

    const product = JSON.parse(text);
    console.log("Producto encontrado:", product);
    return product;
  } catch (error) {
    console.error("Error al hacer la consulta.", error.message);
    return null;
  }
}

// DELETE producto por ID
async function deleteProductById(id) {
  try {
    // Comprueba si el producto existe para poder eliminarlo
    const product = await getProductById(id);
    if (!product) {
      console.log(`No se puede eliminar.`);
      return null;
    }

    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log("\nProducto eliminado.");
    return data;
  } catch (error) {
    console.error("Error en DELETE Producto:", error.message);
    return null;
  }
}

// Eliminar producto del archivo JSON
function deleteProductFromFile(id) {
  try {
    const productos = JSON.parse(fs.readFileSync(JSON_FILENAME, "utf-8"));

    const cantidadOriginal = productos.length;
    const nuevosProductos = productos.filter((prod) => prod.id !== id);

    if (nuevosProductos.length === cantidadOriginal) {
      console.log(`Producto con ID ${id} no existe en ${JSON_FILENAME}`);
      return false;
    }

    fs.writeFileSync(JSON_FILENAME, JSON.stringify(nuevosProductos, null, 2));
    console.log(`Producto con ID ${id} eliminado de ${JSON_FILENAME}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar.", error);
    return false;
  }
}

// Eliminar productos cuyo precio sea mayor a un valor definido
function deleteExpensiveProducts(maxPrice) {
  try {
    const productos = JSON.parse(fs.readFileSync(JSON_FILENAME, "utf-8"));
    const filtrados = productos.filter((prod) => prod.price <= maxPrice);

    fs.writeFileSync(JSON_FILENAME, JSON.stringify(filtrados, null, 2));
    console.log(`Se eliminaron productos con precio > ${maxPrice} de ${JSON_FILENAME}`);

    return filtrados;
  } catch (error) {
    console.error("Error al eliminar productos caros:", error.message);
    return null;
  }
}

function updateProduct(id, newData) {
  try {
    const productos = JSON.parse(fs.readFileSync(JSON_FILENAME, "utf-8"));

    const index = productos.findIndex((prod) => prod.id === id);
    if (index === -1) {
      console.log(`Producto con ID ${id} no encontrado.`);
      return null;
    }

    productos[index] = { ...productos[index], ...newData };

    fs.writeFileSync(JSON_FILENAME, JSON.stringify(productos, null, 2));

    console.log(`Producto con ID ${id} actualizado.`);
    return productos[index];
  } catch (error) {
    console.error("Error al actualizarlo.", error.message);
    return null;
  }
}

/* ———————————————————————————————————————————————————————————————————————————————————— */
/*                                       EJECUCIÓN                                      */
/* ———————————————————————————————————————————————————————————————————————————————————— */

(async () => {
  try {
    // await getProductById(9999); // TESTING: Descomentar para ver el manejo de error

    // —— Recuperar la información de todos los productos (GET)
    await getProducts();

    // —— Recuperar la información de un número limitado de productos (GET)
    limitedProducts = await getProducts(3);

    // —— Persistir los datos de la consulta anterior en un archivo local JSON
    saveToFile(JSON_FILENAME, limitedProducts);

    // —— Agregar un nuevo producto (POST)
    await postProduct(producto_nuevo);

    // —— Buscar la información de un determinado producto, utilizando un “id” como parámetro (GET)
    const idBuscar = 3;
    await getProductById(idBuscar);

    // —— Eliminar un producto (DELETE)
    const idEliminar = 2;
    await deleteProductById(idEliminar);
    deleteProductFromFile(idEliminar);

    // —— Modificar los datos de un producto (UPDATE)
    const productoActualizado = updateProduct(2, { price: 19.99, description: "Descripción de prueba" });
    console.log(productoActualizado);

    // —— Eliminar los productos superiores a un determinado valor
    const precioMax = 500;
    deleteExpensiveProducts(precioMax);
  } catch (err) {
    console.error("Ocurrió un error.", err);
  }
})();
