const nombre = "Jhony"
const apellido = "Saenz"
const obj_persona = {
    nombre: nombre,
    apellido: apellido
}

sessionStorage.setItem("persona", JSON.stringify(obj_persona))
localStorage.setItem("persona", JSON.stringify(obj_persona))

const exp_dos_min = new Date()
exp_dos_min.setMinutes(exp_dos_min.getMinutes() + 2)
exp_dos_min.getMinutes()

document.cookie = `cookie_persona=${JSON.stringify(obj_persona)}; expires=${exp_dos_min}`
