var carro = new Carrito()
var carrito = $("#carrito")
var productos = $("#lista-productos")
var listaProductos = document.querySelector('#lista-carrito tbody')
var vaciarCarritoBtn = $("#vaciar-carrito")
var procesarPedidoBtn = $("#procesar-pedido")

$(document).ready(cargarEventos())

function cargarEventos(){
    productos.click((e)=>{carro.comprarProducto(e)})
    carrito.click((e)=>{carro.eliminarProducto(e)})
    vaciarCarritoBtn.click((e)=>{carro.vaciarCarrito(e)})
    $(document).ready(carro.leerLocalStorage())
    procesarPedidoBtn.click((e)=>{carro.procesarPedido(e)})
}