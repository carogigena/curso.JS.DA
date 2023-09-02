/*Red Social:
Crea un objeto perfil que almacene propiedades como nombre, edad y amigos,
que es un array de objetos donde cada objeto representa un amigo con propiedades
 como nombre y edad. Agrega al menos tres amigos y 
 muestra en la consola el nombre del amigo más joven.*/

 let perfil={nombre:'Lucas',edad:23, amigos:[{nombre:'Cintia',edad:25},
 {nombre:'Nahuel',edad:35},
 {nombre:'Jazmin',edad:28},
]}
let menor;
let nameAmigoMenor;
for(const i in perfil.amigos){
    if (menor===undefined){
        menor=perfil.amigos[i].edad
        nameAmigoMenor=perfil.amigos[i].nombre;
    }else
    {
        if(menor>perfil.amigos[i].edad){
            menor=perfil.amigos[i].edad;
            nameAmigoMenor=perfil.amigos[i].nombre
        }
    }
}
console.log(nameAmigoMenor);
