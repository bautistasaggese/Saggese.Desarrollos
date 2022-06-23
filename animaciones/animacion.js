
//preceso

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Proceso1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1.2s ease-in-out'
    }
})