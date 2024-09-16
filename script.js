const apiKey="a0842c058971708f222519232eebf556";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search1 input");
const searchBtn=document.querySelector(".search-btn button");
const image=document.querySelector(".weather .main-img");

async function checkWeather(city){
if(city===""){
    document.querySelector(".weather").style.display="none";
        document.querySelector(".hum1").style.display="none";
        document.querySelector(".win1").style.display="none";
        document.querySelector(".error").innerHTML="Please Enter City Name !";
        document.querySelector(".error").style.display="block";
        return;
}
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    console.log(data);
    if(response.status==404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".hum1").style.display="none";
        document.querySelector(".win1").style.display="none";
        document.querySelector(".error").innerHTML="Invalid City Name !";
        document.querySelector(".error").style.display="block";
        return;
    }
    var data=await response.json();

    console.log(data);

    document.querySelector(".temp1").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humiditydata").innerHTML=data.main.humidity+"%";
    document.querySelector(".winddata").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        image.setAttribute("src", "images/clouds.png");
    }
    else if(data.weather[0].main=="Clear"){
        image.setAttribute("src", "images/clear.png");
    }
    else if(data.weather[0].main=="Rain"){
        image.setAttribute("src", "images/rain.png");
    }
    else if(data.weather[0].main="Drizzle"){
        image.setAttribute("src", "images/drizzle.png");
    }
    else{
        image.setAttribute("src", "images/mist.png");
    }
    document.querySelector(".weather").style.display="block";
        document.querySelector(".hum1").style.display="block";
        document.querySelector(".win1").style.display="block";
        document.querySelector(".error").style.display="none";
    

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
