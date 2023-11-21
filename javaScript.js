
const carrito = []
const productos = [
    {
        id: 1,
        nombre: "Blazer Morado",
        precio: 95000,
        img: "./imagenes/producto1.jpg"
    },
    {
        id: 2,
        nombre: "Sreep terracota",
        precio: 120000,
        img: "./imagenes/producto2.jpg"
    },
    {
        id: 3,
        nombre: "Conjunto perla",
        precio: 100000,
        img: "./imagenes/producto3.jpg"
    },
    {
        id: 4,
        nombre: "Vestido Negro y Blanco",
        precio: 115000,
        img: "./imagenes/producto4.jpg"
    },
    {
        id: 5,
        nombre: "Oversise Blanco y Negro",
        precio: 130000,
        img: "./imagenes/producto5.jpg"
    },
    {
        id: 6,
        nombre: "Vestido esmeralda",
        precio: 170000,
        img: "./imagenes/producto6.jpg"
    },
    {
        id: 7,
        nombre: "Vestido Negro",
        precio: 150000,
        img: "./imagenes/producto7.jpg"
    },
    {
        id: 8,
        nombre: "Elegant Black Dress",
        precio: 180000,
        img: "./imagenes/producto8.jpg"
    },
    {
        id: 9,
        nombre: "Turquesa Dress",
        precio: 90000,
        img: "./imagenes/producto9.jpg"
    },
    {
        id: 10,
        nombre: "Leopard",
        precio: 135000,
        img: "./imagenes/producto10.jpg"
    },
    {
        id: 11,
        nombre: "Vestido Verde",
        precio: 100000,
        img: "./imagenes/producto11.jpg"
    },
    {
        id: 12,
        nombre: "Vestido Verde Neón",
        precio: 120000,
        img: "./imagenes/producto12.jpg"
    },
]

document.addEventListener('DOMContentLoaded', () => {
    pintar()
})

function pintar() {
    let fragment = document.createDocumentFragment();
    productos.forEach((item, index) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.img
        let h2 = document.createElement("h2");
        h2.textContent = item.nombre
        let p = document.createElement("p")
        p.textContent = item.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        let button = document.createElement("button")
        button.textContent = "Agregar al carrito"
        button.addEventListener("click", () => {
            agregar_carrito(item.id)
        })
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)
        fragment.appendChild(div)

        div.className = "cards"
        h2.className = "nombre_articulo"
        p.className = "precio"
        img.className = "img_contenedor"
        button.className = "boton_agregar"
    })
    document.getElementById("cards").appendChild(fragment)
}

function agregar_carrito(id) {
    const seleccionado = productos.find(producto => producto.id === id);

    const producto_carrito = carrito.find(item => item.producto.id === id);

    if (producto_carrito) {
        producto_carrito.cantidad += 1;
    } else {
        carrito.push({
            producto: {
                id: seleccionado.id,
                nombre: seleccionado.nombre,
                precio: seleccionado.precio,
                img: seleccionado.img
            },
            cantidad: 1
        });
    }
    console.log(carrito);
    pintar2()
}



function pintar2() {
    let total = 0;
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    carrito.forEach(item => {
        console.log(item);
        const producto = item.producto;
        const cantidad = item.cantidad;
        const subtotal = producto.precio * cantidad;
        total += subtotal;

        let tr = document.createElement("tr");

        let imgTabla = document.createElement("td");
        let imgElement = document.createElement("img");
        imgElement.src = producto.img;
        imgTabla.appendChild(imgElement);


        let nombreTabla = document.createElement("td");
        nombreTabla.textContent = producto.nombre;

        let precioTabla = document.createElement("td");
        precioTabla.textContent = producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        1
        let cantidadTabla = document.createElement("td");
        cantidadTabla.textContent = cantidad;

        let subtotalTabla = document.createElement("td");
        subtotalTabla.textContent = subtotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

        let eliminarProducto = document.createElement("td");
        let eliminar = document.createElement("button");
        eliminar.textContent = "❌";
        eliminar.addEventListener("click", () => {
            eliminarRegistro(item.producto.id);
        });
        eliminarProducto.appendChild(eliminar);

        tr.appendChild(imgTabla);
        tr.appendChild(nombreTabla);
        tr.appendChild(precioTabla);
        tr.appendChild(cantidadTabla);
        tr.appendChild(subtotalTabla);
        tr.appendChild(eliminarProducto);
        tabla.appendChild(tr);

        nombreTabla.className = "nombre_tabla"

    });

    document.getElementById("tot").textContent = total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    console.log(carrito);
    console.log(total);
}

function abrirCarrito() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}


function cerrarCarrito() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function eliminarRegistro(productoId) {
    const indice = carrito.findIndex((item) => item.producto.id === productoId);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        pintar2();
    }
}

function vaciarCarrito() {
    carrito.length = 0; 
    pintar2(); 
}


