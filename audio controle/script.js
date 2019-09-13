let audio = document.getElementsByTagName("audio")[0]

function atras(){
   // audio.currentTime -= 5
   audio.playbackRate -= 0.1
}

function play(){
    audio.play()
}

function avanca(){
    //audio.currentTime += 5
    audio.playbackRate += 0.1
}