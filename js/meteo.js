const input = document.getElementById("text1");
const button = document.getElementById("button");
let listMeteo = document.querySelector("#listeInfos")

let url = 'http://api.openweathermap.org/data/2.5/weather?q=marseille&appid=ebbef056fabd1f5c3932576f5181de0c';
const urlLdn = 'http://api.openweathermap.org/data/2.5/weather?q=londres&appid=ebbef056fabd1f5c3932576f5181de0c';



// ****CONSIGNE: A l'aide de l'objet 'Fetch', afficher le résultat d'une
// requête (ex: Londres) dans la console. ----->

// fetch(urlLdn)
//     .then(Response => Response.json())
//     .then(data => console.log(data))


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
            //je créer une fonction fléché pour pouvoir insérer en détail les
            //jours et les degrées de la ville 
            // data.list.forEach(jour => {
            //     listMeteo.insertAdjacentHTML("beforeend", `<li><p>${jour.dt_txt}, degrés: ${jour.main.temp}°C</p></li>`)
            // });

            for (let i = 0; i < 4; i++) {

                listMeteo.insertAdjacentHTML("beforeend", `<li><p>${data.list[i].dt_txt}, degrés: ${data.list[i].main.temp}°C</p></li>`)
            }

            console.log(data)
        })

}


button.addEventListener('click', () => {
    meteoCity(input.value)
})