/* const frutas = ["laranja", "limão", "uva"];
const fruta1 = document.getElementById('fruta-1')
fruta1.push(frutas[0])
 */

const frutas = ["laranja", "limão", "uva"];
const fruta1 = document.getElementById('fruta-1')
fruta1.innerHTML += frutas[0]

const fruta2 = document.getElementById('fruta-2')
fruta2.innerHTML += frutas[1]

const fruta3 = document.getElementById('fruta-3')
fruta3.innerHTML += frutas[2]

const inserirFruta = document.getElementById('fruta')
console.log(inserirFruta);

function imprimir() {
    console.log(inserirFruta.value);
}

function botao() {
    frutas.push(inserirFruta.value)
    const fruta4 = document.getElementById('fruta-4')
    fruta4.innerHTML = frutas[3]
}


