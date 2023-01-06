// Obtener todos los parrafos que son arrastables
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")


// Trabajamos con Eventos arrastrar (dragstart) y soltar (dragend)
parrafos.forEach(parrafo => {
    // Inicio de Arrastre
    parrafo.addEventListener("dragstart", evento => {
        //Creo una nueva clase
        parrafo.classList.add("dragging")
        evento.dataTransfer.setData("id", parrafo.id)

        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        evento.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    // Fin Arrastre
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })

})

// Tabajamos con dragover se activa cuando un elemento o texto se arrastra sobre un objetivo de caída válido (cada cientos de milisegundos).
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", evento => {
        evento.preventDefault()
        // Efectos al mover => copy, move, link, none
        evento.dataTransfer.dropEffect = "copy"
        // console.log("Drag Over")
    })

    //Transferencia de Datos
    seccion.addEventListener("drop", evento => {
        // console.log("Drop")
        const id_parrafo = evento.dataTransfer.getData("id")
        // console.log("Parrafo id: ", id_parrafo)
        // Con esto obtengo el id
        const parrafo = document.getElementById(id_parrafo)
        //Esto hace que se mueva de un DIV al otro
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", evento => {
    evento.preventDefault()
    evento.dataTransfer.dropEffect = "move"
})

papelera.addEventListener("drop", evento => {
    const parrafo_id = evento.dataTransfer.getData("id")
    console.log(parrafo_id)
    document.getElementById(parrafo_id).remove()
})


