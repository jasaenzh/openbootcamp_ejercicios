// Variables globales
let markers = []
let map;

function initMap() {

    // Definimos la posicion lat => latitud y lng => Longitud
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    // Creamos una instancia, debemos de pasarle dos parametros (En que elemento del DOM vamos a utlizarlo , Un Objeto con dos atributos =>  zomm y center )
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    // Creamos la chincheta (puntero)
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -34.603722,
                lng: -58.381592,
            },
            map,
            title: "Buenos Aires",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 38.0000000,
                lng: -97.0000000,
            },
            map,
            title: "Estados unidos",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 55.378051,
                lng: -3.435973,
            },
            map,
            title: "Inglaterra",
        })
    )

    console.log(markers)

}
