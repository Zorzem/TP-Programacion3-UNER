// FileSystem
const fs = require("fs");

// URL
const API_URL = "https://fakestoreapi.com/products";

//nuevo producto
producto_nuevo ={
    "id": 0,
    "title": "Mouse Gamer Bag",
    "price": 22.25,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
}


// GET Productos
async function getProducts(limit) {
  try {
    // Si el paramtro limit está definido, se agrega a la URL.. sino trae todos los productos
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

// POST Productos - Agrega nuevo producto al archivo .json
async function postProduct(producto_nuevo){
  try{
    // Leemos el archivo 'productos.json' de forma asíncrona, usando promesas.
    const datos = await fs.promises.readFile('./productos.json', 'utf-8');//esto va a retornar una promesa
    //obtenemos datos y los paamos a un array
    const productos = JSON.parse(datos);   
    //busca de los productos el mayor
    if (productos.length > 0) {
        maxId = Math.max(...productos.map(producto => producto.id));
    }
    //asigna un nuevo id al producto nuevo con el id ultimo +1
    producto_nuevo.id=maxId+1;
    //Agregamos el nuevo producto al final del array
    productos.push(producto_nuevo);
    // convertimos el array de productos actualizaon a una cadeno json
    const productosActualizados = JSON.stringify(productos,null,2);
    //escribo en el archivo con el nuevo producto
    await fs.promises.writeFile('./productos.json',productosActualizados);
    //informo
    console.log("Nuevo Producto ingresado exitosamente");

  }catch(error){
    console.error("Error al agregar producto:", error);
  }

}



// Guardar productos en archivo JSON
function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Datos guardados en el archivo ${filename}`);
}



// DELETE producto por ID
async function deleteProductById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Producto eliminado de la API:", data);
    return id;
  } catch (error) {
    console.error("Error en DELETE Producto:", error);
  }
}

// Eliminar producto del archivo JSON
function deleteProductFromFile(id) {
  try {
    const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    const nuevosProductos = productos.filter(prod => prod.id !== id);

    fs.writeFileSync("productos.json", JSON.stringify(nuevosProductos, null, 2));
    console.log(`Producto con ID ${id} eliminado tambien de productos.json`);
  } catch (error) {
    console.error("Error al eliminar del archivo:", error);
  }
}





// Ejecución
(async () => {
  try {
    await getProducts(); 
    limitedProducts = await getProducts(5); // Limitado a 5 productos
    saveToFile("productos.json", limitedProducts);
    //Agrego nuevo producto nuevo
    await postProduct(producto_nuevo);
    console.log("Producto agregado",producto_nuevo)
    // Elimino producto por ID
    const idEliminar = 4;
    const id = await deleteProductById(idEliminar);
    if (id) {
      deleteProductFromFile(id);
    }
    

  } catch (err) {
    console.error("Ocurrió un error en la ejecución: ", err);
  }
})();