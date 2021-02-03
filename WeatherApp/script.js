const api={
    key:"52c8bbcc5a93e515c790311573a6c556",
    base:"https://api.openweathermap.org/data/2.5/weather"
}

const searchBox= document.querySelector(".search-box");
searchBox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
        getResults(searchBox.value)
    }
}

function getResults(svalue){
    fetch(`${api.base}?q=${svalue}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(displayResults)
}

function displayResults(weather){
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`

    let d=new Date();
    let date=document.querySelector('.location .date');
    date.innerText=dateBuilder(d);

    let temp=document.querySelector('.current .temp')
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°c</span>`

    let weatherState=document.querySelector('.current .weather')
    weatherState.innerText=weather.weather[0].main;

    let hilow=document.querySelector('.hi-low')
    hilow.innerText=`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day=days[d.getDay()]
    let date=d.getDate()
    let month=months[d.getMonth()]
    let year=d.getFullYear()
    return `${day} ${date} ${month} ${year}`
}