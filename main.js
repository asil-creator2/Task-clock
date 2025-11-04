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
    let month = date.getMonth()+1
    switch (month){
        case 1:
            element3.textContent = "January"; 
            break;
        case 2:
            element3.textContent = "February"; 
            break;
        case 3:
            element3.textContent = "March";
            break;
        case 4:
            element3.textContent = "April"; 
            break;
        case 5:
            element3.textContent = "May"; 
            break;
        case 6:
            element3.textContent = "June"; 
            break;
        case 7:
            element3.textContent = "July"; 
            break;
        case 8:
            element3.textContent = "August"; 
            break;
        case 9:
            element3.textContent = "September"; 
            break;
        case 10:
            element3.textContent = "October"; 
            break;
        case 11:
            element3.textContent = "November"; 
            break;
        case 12:
            element3.textContent = "December"; 
            break;
    }
}


function getDayInWords(){
    let date = new Date()
    let day = date.getDay() +1
    switch (day){
        case 1:
            element4.textContent = "Sunday"; 
            break;
        case 2:
            element4.textContent = "Monday"; 
            break;
        case 3:
            element4.textContent = "Tuesday";
            break;
        case 4:
            element4.textContent = "wednesday"; 
            break;
        case 5:
            element4.textContent = "Thursday"; 
            break;
        case 6:
            element4.textContent = "Friday"; 
            break;
        case 7:
            element4.textContent = "Saturday"; 
            break;
    }
}

setInterval(clock , 1000)
