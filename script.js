function abrirWhatsApp(){

let numero = "5598988442612"

let mensagem = "Olá! Gostaria de informações sobre impressões."

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

}


function enviarArquivo(){

let arquivo = document.getElementById("arquivo").files[0]

let mensagem = document.getElementById("mensagem")

if(!arquivo){

mensagem.innerText = "Selecione um arquivo primeiro."

return

}

mensagem.innerText = "Arquivo selecionado: " + arquivo.name + " (envie pelo WhatsApp)."

}

document.getElementById("pedidoForm").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let tipo = document.getElementById("tipo").value
let quantidade = document.getElementById("quantidade").value
let papel = document.getElementById("papel").value
let obs = document.getElementById("observacao").value

let arquivo = document.getElementById("arquivoPedido").files[0]

let nomeArquivo = ""

if(arquivo){
nomeArquivo = arquivo.name
}else{
nomeArquivo = "Nenhum arquivo anexado"
}

let mensagem = `Pedido de Impressão

Nome: ${nome}
Tipo: ${tipo}
Quantidade: ${quantidade}
Papel: ${papel}
Arquivo: ${nomeArquivo}
Observação: ${obs}

Vou enviar o arquivo agora.`

let numero = "5598988442612"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

})

const counters = document.querySelectorAll('.count')

counters.forEach(counter => {

counter.innerText = '0'

const updateCounter = () => {

const target = +counter.getAttribute('data-target')
const c = +counter.innerText

const increment = target / 200

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`
setTimeout(updateCounter,10)

}else{

counter.innerText = target

}

}

updateCounter()

})


const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".avaliacao")

let index = 0

function moverSlide(){

index++

if(index >= slides.length){
index = 0
}

track.style.transform = `translateX(-${index * 100}%)`

}

setInterval(moverSlide, 4000)
