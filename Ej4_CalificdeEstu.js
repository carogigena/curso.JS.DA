/* Calificaciones de Estudiantes:
Crea un objeto clase que contenga un array de objetos, 
donde cada objeto represente un estudiante con propiedades como nombre y calificaciones, 
que es un array de números. Agrega al menos tres estudiantes y 
muestra en la consola el promedio de calificaciones de cada estudiante.*/

let clase={
    estudiante:[],
    }
clase.estudiante.push({nombre:'Juana', calificaciones:[5,7,9,6]});
clase.estudiante.push({nombre:'Emilio',calificaciones:[6,9,8,2]});
clase.estudiante.push({nombre:'Teresa',calificaciones:[8,3,10,7]});


for (const i in clase.estudiante) {
    let sumanota=0;
    for (const elemento of clase.estudiante[i].calificaciones) {
        sumanota=sumanota+elemento;
    }
    let promedio=sumanota/clase.estudiante[i].calificaciones.length;
    console.log('El promedio de '+ clase.estudiante[i].nombre+' es: '+promedio.toFixed(2))
    
}