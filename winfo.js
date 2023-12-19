
// using asyn - await
async function getWeather(){


    try{
     // talk to remote service
     // get the data
     // send it to another function that can work on data and display
     // let city ='08536';
     let city= document.getElementById('zipcode').value;
     let key ='d72729578543cfc435344f99b226b1c9';
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
     await fetch(url)
     .then((weather) => {return weather.json()})
     .then(displayData);
     }
     catch{
       console.log("Status: Error occurred.");
     }
  //let mydiv = document.getElementById('w')
  // mydiv.innerHTML = "<h3> Getting Data ....</h3> ";
}

function displayData(weather){
  
   let mydiv = document.getElementById('w');
   console.log(weather);
   let tempFar = ((weather.main.temp) *9/5) +32;
  
   let temp = "Temperature: " + tempFar + "F";
   let mintemp ="Min Temp: "+ weather.main.temp_min + "C";
   let maxtemp ="Max Temp: " + weather.main.temp_max + "C";
   let weathStr = "Seems like "+ weather.weather[0].description;
   let imgurl =`https://openweathermap.org/img/wn/` + weather.weather[0].icon + '.png';
   let wicon = `<img src ='${imgurl}' alt='icon here'/>`;
   mydiv.innerHTML =`${wicon} <h3> ${temp} <br> ${mintemp} <br> ${maxtemp} </h3> <br> <h4> ${weathStr}</h4>`;
}