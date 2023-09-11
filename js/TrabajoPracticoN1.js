// 1.Suma de elementos en un arreglo:
// Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
// números.

let arreglo=[25,0,4,8,19,25,34,-7,-15,25];
suma=arreglo.reduce((sumaAcum,elem) => sumaAcum + elem, 0);
console.log('1. La suma de los elementos del array es:', suma);

// 2.Multiplicación de elementos en un arreglo:
// Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
// números.

let arrayMulti=[3,5,-2]
multiplicacion=arrayMulti.reduce((elemMulti,elem) => elemMulti*elem, 1)
console.log('2. La multiplicacion de los elementos del array es:',multiplicacion);

// 3.Concatenación de cadenas:
// Implementa una función que use reduce() para concatenar todos los elementos de un
// arreglo de cadenas en una sola cadena.

let words=['hola', 'mundo', 'soy', 'nueva', 'en','esto','!'];
oracion=words.reduce((cadenaAcum,elem)=>cadenaAcum+' '+elem);
console.log('3. La concatenación de elementos es:',oracion);

// 4.Calcular el promedio:
// Escribe una función que use reduce() para calcular el promedio de un arreglo de números.
console.log('4. El promedio es:', promedio(arreglo))
function promedio(arreglo){
    return (arreglo.reduce((sumaAcum,elem) => sumaAcum + elem ,0)/arreglo.length);
}

// 5.Encontrar el valor máximo:
// Crea una función que utilice reduce() para encontrar el valor máximo en un arreglo de
// números.
console.log('5. El valor máximo es:', valorMaximo(arreglo))
function valorMaximo(arreglo){
    return (arreglo.reduce((maximo,elem)=> maximo > elem ? maximo : elem));
}

// 6.Contar ocurrencias:
// Escribe una función que cuente cuántas veces aparece un elemento específico en un
// arreglo utilizando reduce().
let elemento=25;
console.log('6. El elemento', elemento, 'se repite',elemRepet(arreglo,elemento),'veces')
function elemRepet(arreglo,elemento){
    return arreglo.reduce((acc,val)=> val === elemento ? acc+1 : acc,0);
}

// 7. Ordenar palabras por longitud:
// Crea una función que ordene un arreglo de palabras por su longitud, es decir, la cantidad de
// caracteres.

function ordenarPalabraPorLongitud(palabras) {
    palabras.sort((word1, word2) => word1.length - word2.length);
        return palabras;
    }
let palabras = ["Futbol", "Hockey", "Ajedrez", "Natación", "Equitación", "Rugby"];
console.log('7. Las palabras ordenadas por longitud:',ordenarPalabraPorLongitud(palabras));

// 8. Búsqueda de un elemento en un arreglo:
// Escribe una función que busque un elemento específico en un arreglo y devuelva true si se
// encuentra o false si no se encuentra.

function buscarElemento(arreglo, elemento) {
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i] === elemento) return true
    }
    return false;
}
let elemenBuscado=7;
console.log('8. El elemento',elemenBuscado,'se encuentra en el arreglo (true/false):',buscarElemento(arreglo, elemenBuscado));
    
//9. Búsqueda de la primera coincidencia:
//Implementa una función que busque la primera instancia de un elemento en un arreglo y
//devuelva su índice. Si el elemento no está en el arreglo, devuelve -1.

function buscarElemento1(arreglo, elemento) {
    for(let i=0; i < arreglo.length; i++){
        if(arreglo[i] === elemento) return i
    }
    return -1;
}
elemenBuscado = 25;
let posElemento=buscarElemento1(arreglo, elemenBuscado);
if (posElemento !== -1) {
        console.log('9. El elemento',elemenBuscado,'se encuentra en la posicion',posElemento);
    } else {
        console.log('9. El elemento',elemenBuscado,'no se encuentra en el arreglo.');
    }

//10. Búsqueda de la última coincidencia:
//Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
//su índice. Si el elemento no está en el arreglo, devuelve -1.

function buscarUltimoElemento(arreglo, elemento) {
    let idx= -1
    for(let i=0; i < arreglo.length; i++){
        if(arreglo[i] === elemento) idx=i; 
    }
    return idx;
}
let array3=[25,0,-15,8,19,25,34,-7,-15,25];
elemenBuscado=-15;
let ultimaPosElemento=buscarUltimoElemento(array3, elemenBuscado);
if (ultimaPosElemento !== -1) {
        console.log('10. La ultima posición del',elemenBuscado,'es',ultimaPosElemento);
    } else {
        console.log('10. El elemento',elemenBuscado,'no se encuentra en el arreglo.');
    }