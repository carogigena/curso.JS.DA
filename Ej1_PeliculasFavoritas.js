/*  Peliculas Favoritas:
    Crea un objeto usuario con propiedades como nombre y peliculasFavoritas, 
    que es un array de objetos donde cada objeto representa una película 
    con propiedades como titulo y año. Agrega al menos tres películas favoritas
    y muestra en la consola el título de la segunda película favorita.
*/
var usuario = {
    nombre:"Milo",
    peliculasFavoritas:[
    {titulo:"Cadena de favores",ano:2012},
    {titulo:"Django sin cadenas",ano:2012},
    {titulo:"Star Wars: Episodio I - La amenaza fantasma",ano:1999},
    {titulo:"El clan",ano:2015},
    {titulo:"Argentina, 1985",ano:2015},
    {titulo:"Sexto sentido",ano:1999},
    {titulo:"El protegido",ano:2000},
    ]
    }
  
  console.log('La segunda película favorita de ',usuario.nombre,' es ', usuario.peliculasFavoritas[2].titulo,
  ' del año ',usuario.peliculasFavoritas[2].ano);

  