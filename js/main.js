const fila = document.querySelector('.contenedor-carousel');
const productos = document.querySelectorAll('.productos');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// event listener 

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
})

flechaIzquierda.addEventListener('click', () => {

    fila.scrollLeft -= fila.offsetWidth;
 
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSiblingSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
})


// Paginacion

const numeroPaginas = Math.ceil(productos.length / 5)
for(let i = 0; i < numeroPaginas; i++){
        const indicador = document.createElement('button');

        if(i === 0){
            indicador.classList.add('activo');
        }

        document.querySelector('.indicadores').appendChild(indicador);
        indicador.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.indicadores .activo').classList.remove('activo');
            e.target.classList.add('activo');


        })


}


// Hover

productos.forEach((productos) => {

    productos.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            productos.forEach(productos => productos.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    })
})
<script>"js/main.js" 
		const openModalBtn = document.getElementById("openModalBtn");
		const closeModalBtn = document.getElementById("closeModalBtn");
		const overlay = document.getElementById("overlay");
		const modal = document.getElementById("modal");

fila.addEventListener('mouseleave', () => {
    productos.forEach(productos => productos.classList.remove('hover'));
})
openModalBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    modal.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
  });