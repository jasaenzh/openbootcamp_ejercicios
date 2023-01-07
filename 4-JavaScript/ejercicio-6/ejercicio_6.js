const listaCompra = ["Huevos", "Aceite", "Leche", "Pan", "Agua"]

listaCompra.push("Aceite de Girasol")

listaCompra.pop()

const peliculasFavoritas = [
    {
        titulo: "La Liga de la Justicia de Zack Snyder",
        director: "Zack Snyder",
        fecha: 2021
    },
    {
        titulo: "Batman del futuro: El Regreso del Joker",
        director: "Curt Geda",
        fecha: 2000
    },
    {
        titulo: "Batman: El caballero de la noche asciende",
        director: "Christopher Nolan",
        fecha: 2012
    },
]

const peliculasMayor2010 = peliculasFavoritas.filter(pelicula => {
    if (pelicula.fecha > 2010) {
        return true
    } else {
        return false
    }
})

const directoresPeliculas = peliculasFavoritas.map(pelicula => {
    return pelicula.director
})

const titulosPeliculas = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo
})

const listaNuevaConcat = directoresPeliculas.concat(titulosPeliculas)

const listaNuevaPropa = [...directoresPeliculas, ...titulosPeliculas]