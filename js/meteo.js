const input = document.getElementById("text1");
const button = document.getElementById("button");
let listMeteo = document.querySelector("#listeInfos")
const urlLdn = 'http://api.openweathermap.org/data/2.5/weather?q=londres&appid=ebbef056fabd1f5c3932576f5181de0c';


// ****CONSIGNE: A l'aide de l'objet 'Fetch', afficher le résultat d'une
// requête (ex: Londres) dans la console. ----->
fetch(urlLdn)
    .then(Response => Response.json())
    .then(data => console.log(data))


// ****CONSIGNE: Créer un formulaire qui permette d'accéder au données
// météo de n'importe quel endroit du monde et afficher le résultat dans la console.


//je n'ai pas pris la const 'url' mais préféré mettre directement l'url dans l'argument
// FETCH pour pouvoir intéger quelque chose dedans à l'aide de '${}'
function meteoCity(nameRandom) {

    //vider la recherche précédente pour y placer la nouvelle
    listMeteo.innerHTML = '';

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${nameRandom}&units=metric&lang=fr&appid=ebbef056fabd1f5c3932576f5181de0c`)
        .then(Response => Response.json())
        .then(data => {
            //je créer une boucle for pour pouvoir insérer en détail les
            //jours et les degrées de la ville 

            for (let i = 0; i < 4; i++) {

                listMeteo.insertAdjacentHTML("beforeend", `<li><p>à ${data.city.name}, le ${data.list[i].dt_txt}, degrés: ${data.list[i].main.temp}°C</p></li>`)
            }
            console.log(data)


            let xlat = data.city.coord.lat
            let xlong = data.city.coord.lon


            console.log(xlat, xlong);
        })
}

//je mets un évenement sur le bouton pour qu'il se déclenche au clique, 
//il déclenche la valeur de la fonction codé précédemment
button.addEventListener('click', () => {
    meteoCity(input.value)
})




//////////////////////////changer background peut etre//////////////////////////////

// function changeBg(a) {
//     let result;
//     if ${data.list[i].main.temp} {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }

///////////////////////////////////////////////////////////

// let lat = data.coord.lat
// let long = data.coord.lon



//////////////////////////////////GETT////////////////////////////////////
// function meteoLocalisation(nameRandomm) {

//     //vider la recherche précédente pour y placer la nouvelle
//     listMeteo.innerHTML = '';


//     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${nameRandomm}&units=metric&lang=fr&appid=ebbef056fabd1f5c3932576f5181de0c`)
//         .then(Response => Response.json())
//         .then(data => {
//             //je créer une boucle for pour pouvoir insérer en détail les
//             //jours et les degrées de la ville 

//             for (let i = 0; i < 4; i++) {

//                 listMeteo.insertAdjacentHTML("beforeend", `<li><p>à ${data.city.name}, le ${data.list[i].dt_txt}, degrés: ${data.list[i].main.temp}°C</p></li>`)
//             }
//             console.log(data)

//             let latt = data.city.coord.lat;
//             let long = data.city.coord.lon;

//             console.log(lat, lon);
//         })
// }

//////////////////////////////////GETT////////////////////////////////////



// var lat = 7.1257;
// var lon = 0.5085;
// var macarte = null;
// // Fonction d'initialisation de la carte
// function initMap() {
//     // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
//     macarte = L.map('map').setView([lat, lon], 11);

//     // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
//     L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
//         // Il est toujours bien de laisser le lien vers la source des données
//         attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
//         minZoom: 1,
//         maxZoom: 20
//     }).addTo(macarte);
// }
// window.onload = function() {
//     // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
//     initMap();
// };




// var lat = xlat;
// var lon = xlong;