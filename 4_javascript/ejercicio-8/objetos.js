const datosPersonales = {
    nombre: "Jhony",
    apellido: "Saenz",
    edad: 35,
    altura: 1.83,
    eresDesarrollador: true
}

const miEdad = datosPersonales.edad

console.log(miEdad)

const datos = [
    {
        ...datosPersonales
    },
    {
        nombre: "Raul",
        apellido: "Ereño",
        edad: 27,
        altura: 1.63,
        eresDesarrollador: true
    },
    {
        nombre: "Ezequiel",
        apellido: "Castioni",
        edad: 30,
        altura: 1.69,
        eresDesarrollador: false
    }]

console.log(datos)

datos.sort((a, b) => b.edad - a.edad)

console.log(datos)