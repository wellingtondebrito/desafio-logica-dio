const heroi = "Well";
let xp = 0;
let nivel = ""

// input para o vilão
let vilaoDerrotado = 4

// atacando o vilão e ganhando xp
do {
    vilaoDerrotado === vilaoDerrotado;
    xp = 100 * vilao
    console.log("você matou", vilaoDerrotado, "vilão e agora tem", xp, "xp")
}while(vilao < 1)


if(xp <= 1000){
    nivel = "Ferro"
}else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
}else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata"
}else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else if (xp >= 10001){
    nivel = "Radiante"
}

console.log(`O herói de nome ${heroi} está no nível de ${nivel} com ${xp}xp`)