let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")
/*ctx.moveTo(0,0)
ctx.lineTo(250, 250)
ctx.lineTo(500, 0)
ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.stroke()
*/

/*
ctx.strokeRect(50,20,150,200)
ctx.fillStyle = "blue"
ctx.lineWidth = 5
ctx.strokeStyle = "red"

ctx.fill()
ctx.strokeStyle()
*/

/*
ctx.beginPath()

ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.moveTo(10,10)
ctx.lineTo(400, 300)
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 7
ctx.strokeStyle = "blue"
ctx.fillStyle = "green"
ctx.moveTo(50, 10)
ctx.lineTo(300, 300)
ctx.lineTo(200, 300)
ctx.closePath()
ctx.fill()
ctx.stroke()
*/

//circulo

/*
let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 2 * Math.PI

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.fillStyle = "blue"
ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()
*/

/*
let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0
}

function drawCircle(c){

    ctx.beginPath()
    ctx.rect(0, 0, 500, 500)
    ctx.fillStyle = "beige"
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.fillStyle = "blue"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fill()
    ctx.stroke()
}

setInterval(function(){
    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3
        circle.x += 3
    }
    drawCircle(circle)
}, 500)
*/

let img = new Image()
img.src = "poeta.jpg"

let x = 0
let y = 0

img.onload = desenharImg

function desenharImg(){
    
        ctx.drawImage(this, x, y, this.naturalWidth/4, this.naturalHeight/4)
    
        
   
    
}

