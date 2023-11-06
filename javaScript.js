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
        nombre: "Chaqueta Azul",
        precio: 120000,
        img: "./imagenes/producto2.jpg"
    },
    {
        id: 3,
        nombre: "Conjunto Deportivo Negro",
        precio: 120000,
        img: "./imagenes/producto3.jpg"
    },
    {
        id: 4,
        nombre: "Buzo algodonado gris",
        precio: 170000,
        img: "./imagenes/producto4.jpg"
    },
    {
        id: 5,
        nombre: "Short Strip Azul",
        precio: 110000,
        img: "./imagenes/producto5.jpg"
    },
    {
        id: 6,
        nombre: "Vestido perla",
        precio: 170000,
        img: "./imagenes/producto6.jpg"
    },
    {
        id: 7,
        nombre: "Enterizo café",
        precio: 150000,
        img: "./imagenes/producto7.jpg"
    },
    {
        id: 8,
        nombre: "Conjunto perlado",
        precio: 250000,
        img: "./imagenes/producto8.jpg"
    },
    {
        id: 9,
        nombre: "Conjunto perlado",
        precio: 250000,
        img: "./imagenes/producto9.jpg"
    },
    {
        id: 10,
        nombre: "Conjunto perlado",
        precio: 250000,
        img: "./imagenes/producto10.jpg"
    },

    {
        id: 11,
        nombre: "Conjunto perlado",
        precio: 250000,
        img: "./imagenes/producto11.jpg"
    },

    {
        id: 12,
        nombre: "Conjunto perlado",
        precio: 250000,
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
            agregar_carrito(productos.id)
        })
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)
        fragment.appendChild(div)

        div.className = "cards"
        h2.className="nombre_articulo"
        p.className="precio"
        button.className="boton_agregar"

    })
    document.getElementById("cards").appendChild(fragment)

}


function agregar_carrito(id){
  const seleccionados = productos.find(producto => producto.id === id)
  const productos_carrito= carrito.find (item => item.producto,id ===id)
  carrito.push({producto: seleccionados, cantidad: 1})
  console.log(carrito)
}
