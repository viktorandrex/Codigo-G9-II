console.log("Hola mundo!");
console.warn("Te advierto!");
console.error('Algo ha pasado');

//Variables
//String - Texto
var nombre = "Victor";
console.log(nombre);

//Number - para operaciones aritméticas
var edad = 30;
console.log(edad)
//typeof -> imprime el tipo de variable
console.log(typeof edad)

//Boolean - Lógicas
var esDeNoche = false;
console.log(esDeNoche);

var meQuiere = true;
console.log(meQuiere);

//tipos de datos raros
//undefined
var nota;
console.log(nota);

var nulo = null;
console.log(nulo);

//NaN, Not a Number
//NaN, No es un número
var rareza = 1000/"patatas"
console.log(rareza)

//let es mas seguro, var trae problemas
//let no permite declarar variable mas de 2 veces
let edadPerro = 15;
//si yo deseo cambiar el valor de una variable, me basta con referenciarla y darle un nuevo valor con =
edadPerro = 17;

edadPerro = 20;

edadPerro = "veinte"

edadPerro = undefined

console.log(edadPerro);