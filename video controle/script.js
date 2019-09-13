let video = document.getElementById("video1")


function retroceder(){
    video.currentTime -=15
}

function play(){
    video.play()
}
function stop(){

}
function avanca(){
    video.currentTime +=15
}

let btns = document.getElementById("controle1")
let container = document.querySelector(".container")
container.addEventListener("mouseover", aparecer)
container.addEventListener("mouseout", desaparecer)

function aparecer(){
    btns.style.visibility = "visible"
}

function desaparecer(){
    btns.style.visibility = "hidden"
}