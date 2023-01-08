const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const cardTemplate = document.querySelector('#template-card').content
const footerTemplate = document.querySelector('#template-footer').content
const cartTemplate = document.querySelector('#template-carrito').content
const fragment = document.createDocumentFragment()


let carrito = {}

let buttonComprar = document.querySelectorAll('.buttonComprar')