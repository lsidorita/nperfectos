/*let comenzarCompra = prompt("Deseas comprar algo? si/no")
const librosElegidos = [];
const libros = ['aei','ou'];
function compraLibros (comenzarCompra) {
    if(comenzarCompra == "si" ){
        let libroQueQuieroComprar = prompt("Nombre del libro que quieres comprar: ");
        if(libros.includes (libroQueQuieroComprar)){
            alert("Pusiste " + libroQueQuieroComprar + "en tu carrito");
            librosElegidos.push(libroQueQuieroComprar);
    }
    else {
        alert("ups! parece que esa opcion no esta disponible");
    }
}
} */
/*const librosElegidos = [];
const libros = ['aei', 'ou'];

function compraLibros() {
  while (true) {
    let comenzarCompra = prompt("¿Deseas comprar un libro? si/no");
    if (comenzarCompra.toLowerCase() === "no") {
      break; 
    }
    if (comenzarCompra.toLowerCase() === "si") {
      let libroQueQuieroComprar = prompt("Nombre del libro que quieres comprar: ");
      if (libros.includes(libroQueQuieroComprar)) {
        alert("Pusiste " + libroQueQuieroComprar + " en tu carrito");
        librosElegidos.push(libroQueQuieroComprar);
      } else {
        alert("¡Ups! Parece que esa opción no está disponible");
      }
    } else {
      alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
    }
  }
}
compraLibros();
console.log("Libros en el carrito:", librosElegidos);*/
/*function crear(n) {
    const visitados = new Array(n).fill(false);
    const lista = new Array(n).fill().map(() => []);
  
    return { visitados, lista };
  }
  
  // funcion para agregar una arista entre dos nodos en el grafo
  function agregar(grafo, nodo1, nodo2) {
    grafo.lista[nodo1].push(nodo2);
    grafo.lista[nodo2].push(nodo1);
  }
  
  // funcion DFS (depth-first search) para recorrer el grafo
  function dfs(grafo, nodo) {
    grafo.visitados[nodo] = true;
    for (const vecino of grafo.lista[nodo]) {
      if (!grafo.visitados[vecino]) {
        dfs(grafo, vecino);
      }
    }
  }
  
  // funcion principal
  function main() {
    const n = 5; // numero de nodos
    const m = 4; // numero de aristas
    const grafo = crear(n);
  
    agregar(grafo, 0, 1);
    agregar(grafo, 1, 2);
    agregar(grafo, 3, 4);
  
    dfs(grafo, 0);
  
    let estanConectadas = true; // indicador casas conectadas
  
    for (let k = 0; k < grafo.visitados.length; k++) {
      if (!grafo.visitados[k]) {
        estanConectadas = false;
        console.log(k + 1);
      }
    }
  
    if (estanConectadas) console.log("connected");
  }
  
  // Llamar a la función principal
  main();*/

// representar un producto
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  
  // agregar un producto al carrito
  function agregarProducto(carrito) {
    var nombre = prompt("Ingrese el nombre del producto:");
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));
  
    if (!isNaN(precio)) {
      var producto = new Producto(nombre, precio);
      carrito.push(producto);
      alert("Producto agregado al carrito: " + nombre);
    } else {
      alert("Precio inválido. El producto no se ha agregado.");
    }
  }
  
  // productos en el carrito
  function mostrarCarrito(carrito) {
    console.log("Carrito de compras:");
    for (var i = 0; i < carrito.length; i++) {
      console.log(carrito[i].nombre + ": $" + carrito[i].precio);
    }
  }
  
  // f principal
  function main() {
    var carrito = [];
  
    while (true) {
      var opcion = prompt("Seleccione una opcion:\n1. Agregar producto\n2. Mostrar carrito\n3. Salir");
  
      switch (opcion) {
        case "1":
          agregarProducto(carrito);
          break;
        case "2":
          mostrarCarrito(carrito);
          break;
        case "3":
          alert("Gracias por usar el carrito de compras.");
          return;
        default:
          alert("Opción inválida. Por favor, seleccione una opcion valida.");
      }
    }
  }
  
  
  main();
  


  
  
  