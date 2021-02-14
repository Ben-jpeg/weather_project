const input = document.getElementById("text1");
const button = document.getElementById("button");
let listMeteo = document.querySelector("#listeInfos")
const urlLdn = 'https://api.openweathermap.org/data/2.5/weather?q=londres&appid=ebbef056fabd1f5c3932576f5181de0c';


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

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameRandom}&units=metric&lang=fr&appid=ebbef056fabd1f5c3932576f5181de0c`)
        .then(Response => Response.json())
        .then(data => {
            //je créer une boucle for pour pouvoir insérer en détail les
            //jours et les degrées de la ville 

            for (let i = 0; i < 4; i++) {

                listMeteo.insertAdjacentHTML("beforeend", `<li><p>à ${data.city.name}, le ${data.list[i].dt_txt}, degrés: ${data.list[i].main.temp}°C</p></li>`)
            }
            // if (data.list[1].main.temp < 5) {
            //     document.body.style.backgroundImage = "url(https://www.world-lolo.com/images/uploads/image.num1328789955.of.world-lolo.com.jpg)"
            // }
            // // if (data.list[1].main.temp < 25) {
            // //     document.body.style.backgroundImage = "urlhttps://i.pinimg.com/originals/93/cd/8c/93cd8c323bf1993ca0ab15d39ba3db06.jpg)"}
            // else(data.list[1].main.temp > 25); {
            //     document.body.style.backgroundImage = "url(https://www.10wallpaper.com/wallpaper/2560x1600/1306/palms_and_hammock-Summer_Photography_Wallpaper_2560x1600.jpg)"
            // }
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

//////////////////////////////////////////////////////////
// let lat = data.coord.lat
// let long = data.coord.lon