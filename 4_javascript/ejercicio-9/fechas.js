const fechaHoy = new Date()

console.log(fechaHoy)

const fechaNacimiento = new Date(1985, 09, 3)

console.log(fechaNacimiento)

const esTarde = fechaHoy > fechaNacimiento

console.log(esTarde)

const mesNacimiento = fechaNacimiento.getMonth()

console.log(mesNacimiento)

const anioNacimiento = fechaNacimiento.getFullYear()

console.log(anioNacimiento)