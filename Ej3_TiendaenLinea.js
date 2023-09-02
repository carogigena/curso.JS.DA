/* Tienda en Línea:
Crea un objeto producto con propiedades como nombre, precio y disponible. 
Luego, crea una función llamada mostrarProducto que tome un objeto producto
 como argumento y muestre en la consola toda la información del producto.
 */
 let producto ={nombre:'Remera Bio', 
     precio:7500, 
     disponible:'SI'};

function mostrarProducto(verProducto)
{
    console.log('El precio de "'+verProducto.nombre+'" es $'+verProducto.precio+'. '+verProducto.disponible +' está disponible.')
 }    
mostrarProducto(producto);

