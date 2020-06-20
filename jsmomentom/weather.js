
const weather = document.querySelector(".js-weather");

const API_KEY = "b0a04e220955728b5987cb691707023a";
//to get Company Custom API, set a api_key
const COORDS = 'coords';

//////

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(
        function(response){
           return response.json();
        }) // get json
        .then(function(json){
            const temperature = json.main.temp; 
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        }); // fetch -> response func(parsing?) -> print text by parsed json data

    //we can get data from URL, using 'fetch' keyward
    //and, 'then' keyward means perform something until waiting finishing fetch step.
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude; //
    const longitude = position.coords.longitude;    
    const coordsObj = {
         latitude,
         longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
   console.log("can't access the coorditation");
}

function askForCoords(){
      navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        //get weather
    }
}


//////

function init(){
   loadCoords();
}

init();