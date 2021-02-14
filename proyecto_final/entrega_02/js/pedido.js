var carro = new Carrito()
var carrito = document.getElementById('carrito')
var productos = document.getElementById('lista-productos')
var listaProductos = document.querySelector('#lista-carrito tbody')
var vaciarCarritoBtn = document.getElementById('vaciar-carrito')
var procesarPedidoBtn = document.getElementById('procesar-pedido')

cargarEventos()

function cargarEventos(){
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)})
    carrito.addEventListener('click',(e)=>{carro.eliminarProducto(e)})
    vaciarCarritoBtn.addEventListener('click',(e)=>{carro.vaciarCarrito(e)})
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage())
    procesarPedidoBtn.addEventListener('click',(e)=>{carro.procesarPedido(e)})
}