// // primer entrega Proceso de compra

// let quisocomprar = "si";
// let producto = "pagina";
// let precio = 0;
// let cantidad = 0;
// let precioTotal = 0;
// let seguirComprando = false;

// let deseacomprar = prompt("¿Desea comprar algun producto? Conteste con si o no.");

// if (deseacomprar == quisocomprar){
//     do{
//         producto = prompt ("Queres comprar una pagina, mantenimiento de pagina o ambos? Conteste con minusculas!!!, pagina, mantenimiento o ambos.");
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

//Fin de proceso de compra


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
};

const producto1 = new Producto("pagina", 120);
const producto2 = new Producto("mantenimiento", 20);
const producto3 = new Producto("diseño", 100);
const producto4 = new Producto("logo", 20);
const producto5 = new Producto("ceo", 50);

const productos = [
    producto1.nombre + '  $' + producto1.precio,
    producto2.nombre + '  $' + producto2.precio,
    producto3.nombre + '  $' + producto3.precio,
    producto4.nombre + '  $' + producto4.precio,
    producto5.nombre + '  $' + producto5.precio
];

function iniciarCalculo() {

    alert('Bienvenidos a Saggese Desarrollos!');
    elegirProducto();

};

let precio = 0;
let cantidad = 0;
let seguirComprando = true;

function elegirProducto() {
    productoElegido = prompt('que productos quiere cotizar?' + '\n' + productos.join('\n') + '\n' + 'ingrese el nombre del producto que quiere y presione aceptar.' + '\n' + 'Presione cancelar para abandonar.');

    if (productoElegido === null) {
        return;
    }

    switch (productoElegido.toUpperCase()) {
        case "Pagina":
                precio = producto1.precio;
                cantidadCuotas();
            break;
        case "mantenimiento":
                precio = producto2.precio;
                cantidadCuotas();
            break;
        case "diseño":
            precio = producto3.precio;
                cantidadCuotas();
            break;
        case "logo":
            precio = producto4.precio;
                cantidadCuotas();
            break;
        case "ceo":
            precio = producto5.precio;
                cantidadCuotas();
            break;
        default:
            alert(`
                algo salio mal!

                vuelve a intentarlo
            `);
            producto = " ";
            elegirProducto()
            break;
    };

};

function cantidadCuotas() {

    cuotas = prompt(`
        En cuantas cuotas desea calcular 3, 6 o 12?

        Ingrese la cantidad que quiere y presione "Aceptar".
    `);

    if (cuotas === null) {
        return;
    }

    switch (Number(cuotas)) {
        case 3:
        case 6:
        case 12:
            precioCuotas = precio / cuotas;
            finalizarCalculo()
            break;
        default:
            alert(`
                algo salio mal!

                vuelve a intentarlo
            `);
            cantidad = " ";
            cantidadCuotas();
            break;
    };
};

function finalizarCalculo() {
    alert ('Las cuotas serian de: $' + precioCuotas.toFixed(2))

    let finalizarCalculo = confirm ("¿Quiere hacer otro calculo?");
        
    if (finalizarCalculo) {
        elegirProducto()
    } else {
        saludo()    
    };

}

function saludo() {
    alert ('muchas gracias por utilizar la calculadores de cuotas! vuelva pronto!')
}

iniciarCalculo()