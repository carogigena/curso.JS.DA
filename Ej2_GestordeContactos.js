/*  Gestor de Contactos:
Crea un objeto contactos que almacene una lista de objetos, 
donde cada objeto represente un contacto con propiedades como nombre, 
telefono y email. 
Luego, agrega un nuevo contacto a la lista y 
muestra en la consola la cantidad total de contactos.*/

let contactos ={
       contacto:[
        {nombre:'Juana', telefono:'15334562', email:'juana@gmail.com'},
        {nombre:'Pedro', telefono:'15434962', email:'pedro@gmail.com'}]
    };
contactos.contacto.push({nombre:'Amalia', telefono:'15854962', email:'amalia@gmail.com'})

console.log('Cantidad de contactos:',contactos.contacto.length);