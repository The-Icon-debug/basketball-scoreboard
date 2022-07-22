let home = document.querySelector("#home")
let guest = document.getElementById("guest")
//console.log(home)
let homeScores = 0
let guestScores = 0

function homeScoreOne(){
    homeScores++
    home.innerHTML = homeScores
}

function homeScoreTwo(){
    homeScores += 2
    home.innerHTML = homeScores
}

function homeScoreThree(){
    homeScores += 3
    home.innerHTML = homeScores
}

function guestScoreOne(){
    guestScores++
    guest.innerHTML = guestScores
}

function guestScoreTwo(){
    guestScores += 2
    guest.innerHTML = guestScores
}

function guestScoreThree(){
    guestScores += 3
    guest.innerHTML = guestScores
}

function reset(){
    homeScores = 0
    guestScores = 0
    home.innerHTML = 0
    guest.innerHTML =0
}