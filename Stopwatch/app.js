let hours=0
let minutes=0
let seconds=0
let dishours=0
let dissec=0
let dismin=0
function stopwatch(){
    if(seconds<60)
    {
        seconds++
        if(seconds==60)
        {
            seconds=0
            minutes++
            if(minutes==60)
            {
                hours++
                minutes=0
            }
        }
    }
    if(seconds<10)
    {
        dissec="0"+seconds.toString()
    }
    else
    dissec=seconds.toString()
    if(dishours<10)
    {
        dishours="0"+hours.toString()
    }
    else
    dishours=hours.toString()
    if(dismin<10)
    {
        dismin="0"+minutes.toString()
    }
    else
    dismin=minutes.toString()
    document.querySelector("#Display").innerHTML= dishours+":"+dismin+":"+dissec
}
//Start the Stopwatch
let interval=0;
let btnstart= document.querySelector("#start")
btnstart.addEventListener("click",()=>{
    interval=window.setInterval(stopwatch,1000)
})

//Pause the Stopwatch
let btnpause= document.querySelector("#pause")
btnpause.addEventListener("click", ()=>{
    window.clearInterval(interval)
})

//Restart the Stopwatch
let btnrestart= document.querySelector("#restart")
btnrestart.addEventListener("click", ()=>{
    hours=0
    minutes=0
    seconds=0
    dishours=0
    dissec=0
    dismin=0
    document.querySelector("#Display").innerHTML="00:00:00"
})
