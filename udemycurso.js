const reproductor ={
 reproducir: id => console.log( `reproduciendo cancion con el id ${id}`),

 pausar: () => console.log(`pausando...`),

 borrar: id => console.log(`borrando la playlist ${id}`),

 crearPlaylist: nombre => console.log(`creando la playlist de ${nombre}`),

 reproducirPlaylist: nombre => console.log(`reproduciendo la playlist ${nombre}`)

}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar()
reproductor.crearPlaylist("rap")
reproductor.reproducirPlaylist(" la fiesta")