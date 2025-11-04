let element = document.getElementById("clock")
let element2 = document.getElementById("bonus")
let element3 = document.getElementById("bonus-2")
let element4 = document.getElementById("day")

function clock (){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    element.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`
    let day = date.getDay()
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    element2.textContent = `${day} : ${month} : ${year}`
    getMonthInWords()
    getDayInWords()
}

function getMonthInWords(){
    let date = new Date()
    let months = ['January','February','March','April','may','June','July','August','September','October','November','December']
    let month = months[date.getMonth() ]
    element3.textContent = month; 

}


function getDayInWords(){
    let date = new Date()
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let day = days[date.getDay()]
    element4.textContent = day

}

setInterval(clock , 1000)
