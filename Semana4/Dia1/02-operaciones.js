let a = 100;
let b = 4;

let suma = a + b;
console.log("Suma", suma);

let resta = a - b;
console.log("Resta",resta);

let multiplicacion = a * b;
console.log("Multiplicación", multiplicacion);

let division = a / b;
console.log("División", division);

let residuo = 105 % 4;
console.log("Modulo", residuo);

//Concatenar
let nombre = "Victor";
let saludo = "Hola soy ";
let edad = 35;
// las variables que sean simples
//sin tíldes, ni carácteres raros
//comiencen en una letra
let oracion = saludo + nombre + " y tengo " + edad;
console.log(oracion)

// \n -> para salto de linea
// \" -> para poder imprimir comillas
let cita = "\"La imaginación es más importante que el conocimiento\". \nAlbert Einstein";
console.log(cita);


console.log("11" + 1);//concatenando, aqui agrega 1 al texto
console.log("11" - 1);//resta, aqui si acepta la operacion


let saludo2 = "Buen día ";
let ciudad = "Lima";
//Tecla Alt-Gr + ] } `
//${} significa que ahí adentro puedo usar JS
//template string
//Esto es muy utilizado para concatenar sin problemas
let oracion2 = `${saludo2} soy de ${ciudad}`;
console.log(oracion2);
