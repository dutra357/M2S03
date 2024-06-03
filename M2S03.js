//Card01
const notas = [8.0, 7.5, 6, 10.0];
function calc(notas) {
    let media = 0;

    notas.forEach(element => {
        media += element;
    });

    return media / notas.length;
}


//Card02
let media = calc(notas);
function mediaResponse(media) {
    if (media > 7) {
        document.write('<h2>Parabéns você passou na média!</h2>')
    } else {
        document.write('<h2>Infelizmente você está de recuperação.</h2>')
    } 
}


//Card03
let nomes = ['Miguel', 'Laura', 'Julia', 'Pedro'];
function imprimeNomes(nomes) {
    nomes.forEach((element) => {
        document.write(`<h3>${element}</h3>`);
    })
}
//mediaResponse(media)
//imprimeNomes(nomes)




//Card04 -Tabuada do 8
let tabela = document.getElementById('table')
function tabuada(n) {
    for(let i = 0; i <= 10; i++) {
        let element = n * i;
        tabela.innerHTML += `<tr><td class="primeiro">${i}</td><td class="segundo">${n} x ${i} = ${element}</td></tr>`
    }
}
//tabuada(8)


//Card05
