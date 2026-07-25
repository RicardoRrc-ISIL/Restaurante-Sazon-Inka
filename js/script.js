//SAZÓN INKA
console.log("Sistema iniciado");

// Arreglo donde se guardarán los pedidos
let pedidos = [];

// Pedidos en pantalla
function mostrarPedidos() {

    let lista = document.getElementById("listaPedidos");

    let total = 0;

    lista.innerHTML = "";

    for (let i = 0; i < pedidos.length; i++) {

        let subtotal = pedidos[i].cantidad * pedidos[i].precio;

        console.log("Subtotal:", subtotal);
        console.log("Total antes:", total);

        total += subtotal;

        console.log("Total después:", total);

        let item = document.createElement("li");

        item.textContent =
            pedidos[i].cantidad +
            " x " +
            pedidos[i].plato +
            " - S/ " +
            subtotal.toFixed(2);

        lista.appendChild(item);

    }

    console.log("TOTAL FINAL:", total);

    document.getElementById("total").textContent =
    "Total: S/ " + total.toFixed(2);

}

// Agregar pedido
function agregarPedido() {

    let plato = document.getElementById("plato").value;

    let cantidad = Number(document.getElementById("cantidad").value);

    // Validar la cantidad
    if (cantidad <= 0) {

        alert("Ingrese una cantidad válida.");
        return;

    }

    let precio = 0;

    if (plato === "Ceviche") {

        precio = 35;

    } else if (plato === "Pollo a la Brasa") {

        precio = 30;

    } else {

        precio = 28;

    }

    pedidos.push({

        plato: plato,
        cantidad: cantidad,
        precio: precio

    });

    mostrarPedidos();

}

// Vaciar pedido
function vaciarPedido() {

    pedidos = [];

    mostrarPedidos();

}

// Botones de acción
document
    .getElementById("agregarPedido")
    .addEventListener("click", agregarPedido);

document
    .getElementById("vaciarPedido")
    .addEventListener("click", vaciarPedido);