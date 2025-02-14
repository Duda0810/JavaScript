function calculaArea(altura, alrgura) {
    const area = altura * alrgura
    console.log(area)
}

calculaArea(2, 3)

function imprimirOlamundo (){
    console.log ('ola mundo')
}

imprimirOlamundo()

function nomeIdade(){
    console.log('MariaEduardaCosta')      
} 

nomeIdade()

let nome1 = 'Maria'
console.log('meu nome é' , nome1 )

//Template String
let nome2 = "maria"
console.log(`meu nome é ${nome2}`)


function tresNomes (nome){
    console.log(`Óla ${nome}`)

}

tresNomes('Maria')
tresNomes('Mirelle')
tresNomes('felipe')


function calculaMedia(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3
    console.log(media)
}
calculaMedia(5, 9, 7)

function imparPar (numero){
    if (numero % 2 === 0) {
    console.log('numero par')
    } 
    else {
    console.log('numero impar')
    }
}

imparPar(27)
