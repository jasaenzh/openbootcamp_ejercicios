const btn_click = document.querySelector("#btn-click")

btn_click.addEventListener("click", () => {
    alert("click en el botón")
})

$("button").click("click", () => {
    console.log("Hola, estoy utilizando jQuery")
})