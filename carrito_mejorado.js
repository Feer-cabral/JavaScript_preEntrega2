const carrito = [];

function enCarrito(nombrePrompt) {
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}

function buscar() {
  console.clear();
  const keyword = prompt("¿Que producto desea buscar?");

  const resultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(resultados);
}

function agregar() {
  const nombrePrompt = prompt("Ingrese el nombre del producto:");
  const precioPrompt = prompt("Introduzca el precio del producto:");

  const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    subtotal: parseInt(precioPrompt),
    cantidad: 1,
  };

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = parseInt(precioPrompt);
    productoEncontrado.subtotal =
      parseInt(precioPrompt) * productoEncontrado.cantidad;
  } else {
    carrito.push(nuevoProducto);
  }
  alert(
    "El producto '" + nombrePrompt + "' fue agregado exitosamente al carrito."
  );
  listar();
}

function listar() {
  console.clear();
  console.log("Estos son los productos que se encuentran registrados");

  for (const producto of carrito) {
    console.log("-------------------------");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Cantidad:", producto.cantidad);
    console.log("Subtotal:", producto.subtotal);
  }

  const totalCarrito = carrito.reduce((acu, el) => acu + el.subtotal, 0);
  console.log("TOTAL DEL CARRITO: $ ", totalCarrito);
}

function quitar() {
  const nombrePrompt = prompt("¿Que producto desea quitar del carrito?");

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    const indice = carrito.indexOf(productoEncontrado);

    carrito.splice(indice, 1);

    alert(
      "El producto '" + productoEncontrado.nombre + "' fue borrado del carrito."
    );
  } else {
    alert("El producto '" + nombrePrompt + "' no se encuentra en el carrito.");
  }
  listar();
}
