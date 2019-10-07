function iniciar(){
    let h = document.getElementById("teste")

    h.addEventListener("mouseover", mudarcor)
    h.addEventListener("mouseout", padrao)
    h.addEventListener("click", clicou)

}

function padrao(){
    this.style.backgroundColor = "aqua"
    this.style.color = "black"
}

function mudarcor(){
    this.style.backgroundColor = "black"
    this.style.color = "yellow"
}

function clicou(){
    this.innerHTML = "Leo Clicou kkkkk"
}
