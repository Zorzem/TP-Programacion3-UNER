// FileSystem
const fs = require("fs");

// URL
const API_URL = "https://fakestoreapi.com/products";

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


// Guardar productos en archivo JSON
function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Datos guardados en el archivo ${filename}`);
}





// Ejecución
(async () => {
  try {
    await getProducts(); 
    limitedProducts = await getProducts(5); // Limitado a 5 productos
    saveToFile("productos.json", limitedProducts);
  } catch (err) {
    console.error("Ocurrió un error en la ejecución: ", err);
  }
})();