document.addEventListener("DOMContentLoaded", () => {
    dataFetch();
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        MostrarCarro()
    } 
})

const dataFetch = async () => {
    try {
        const res = await fetch('/js/database.json')
        const data = await res.json()
        // console.log(data);
        MostrarCard(data);
    } catch (error) {
       
    }
}


