// let quisocomprar = "si";
// let producto = "pagina";
// let precio = 0;
// let cantidad = 0;
// let precioTotal = 0;
// let seguirComprando = false;

// let deseacomprar = prompt("¿Desea comprar algun producto? Conteste con si o no.");
// if (deseacomprar == quisocomprar){
//     do{
//         producto = prompt ("Queres comprar una pagina, mantenimiento de pagina o ambos? Conteste con minusculas, PAGINA, MANTENIMIENTO o AMBOS.");
//         cantidad = Number(prompt("Cuantos queres comprar?"));
    
//         switch (producto) {
//             case "pagina":
//                 precio = 90;
//                 break;
//             case "mantenimiento":
//             precio = 25;
//             case "ambos":
//                 precio = 115;
//             default:
//                 alert("Algunos de los datos ingresados no son correctos")
//                 precio = 0;
//                 cantidad = 0;
//                 break;
//         }
//         precioTotal += precio * cantidad;
    
//         seguirComprando = confirm("Queres seguir comprando?")
//     }while (seguirComprando);
    
//     alert ("El valor de la compra es: $"+precioTotal+". Para terminar la compra aprete el boton CONTACTANOS en el menu de navegacion." );
// }else{
//     alert("Disfrute nuestro sitio web")
// }


//
//animaciones PROCESO DE DESARROLLO
//
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Proceso1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight*2;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1.2s ease-in-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Proceso2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight*2;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1.2s ease-in-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Proceso3');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1.2s ease-in-out'
    }
})
//FIN DE ANIMACIONES PROYECTOS DE DESARROLLO

//
//animaciones mantenimiento
//
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('mantenimiento1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight*2;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1.2s ease-in-out'
    }
})