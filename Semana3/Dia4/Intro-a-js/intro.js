var nombre="";

console.log(nombre);

nombre = "Faraon love shady 2";

console.log(nombre);

console.log("Hola");

console.warn("Hey!!, soy una advertencia")
console.error("Hey!!, soy un error")

// Ejemplo de clase
class Mesa{
    //es como un plano para hacer mesas
    imprimirNombre(){
        console.log("Soy una mesa")
    }
    imprimirColor(nombreColor){
        console.log(nombreColor)
    }
}
var taburete= new Mesa()
taburete.imprimirNombre()
taburete.imprimirColor("blanco")

// var saludo ="Hola, ¿Cómo estas?"
let otroSaludo ="Hola, ¿Cómo estas?, por favor evita usar la palabra reservada var cuando quieras unsar una variable, usa let en su lugar"
console.log(otroSaludo)

otroSaludo=3 //El problema es que puede cambiar de tipo facilmente y esto puede provocar futures errores

console.log(otroSaludo)

// Constante
const nombre2="Victor"
console.log(nombre2)
// nombre2="Andrés" //No se puede cambiar el valor a la constante


