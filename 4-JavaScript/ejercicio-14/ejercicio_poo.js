class Estudiante {
    //Atributos
    nombre;
    asignatura = ["Javascript", "HTML", "CSS"]

    //Metodo constructor
    constructor(nombre) {
        this.nombre = nombre
        this.asignatura
    }

    // Metodo obtenDatos
    obtenDatos() {
        console.log(`Estudiante ${this.nombre} tiene las asignaturas ${this.asignatura[0]}, ${this.asignatura[1]} y ${this.asignatura[2]}`)
    }

}

const estudiante_1 = new Estudiante("Jhony")
estudiante_1.obtenDatos()