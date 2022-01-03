function calculaMedia(nota1, nota2, notaOptativa=-1) {

  if (nota1 <= nota2 && nota1 < notaOptativa) {
    nota1 = notaOptativa
  } else if (nota2 <= nota1 && nota2 < notaOptativa) {
    nota2 = notaOptativa
  }

  return (nota1 + nota2) / 2

}

function mensagemMedia(media) {

  if(media >= 6) {
    return "Aprovado"
  } else if (media <= 3) {
    return "Reprovado"
  } else {
    return "Aluno está de exame"
  }
}

//const result = calculaMedia(6,5)
//console.log(result)

const result = mensagemMedia( calculaMedia(5,5) )
console.log(result)