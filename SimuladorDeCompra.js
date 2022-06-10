
let producto = "pagina";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let seguirComprando = false;

do{
    producto = prompt ("Queres comprar una pagina, mantenimiento de pagina o ambos?");
    cantidad = Number(prompt("Cuantos queres comprar?"));

    switch (producto) {
        case "pagina":
            precio = 90;
            break;
        case "mantenimiento":
        precio = 25;
        case "ambos":
            precio = 115;
        default:
            alert("Algunos de los datos ingresados no son correctos")
            precio = 0;
            cantidad = 0;
            break;
    }
    precioTotal += precio * cantidad;

    seguirComprando = confirm("Queres seguir comprando?")
}while (seguirComprando);

alert ("El valor de la compra es: $"+precioTotal );