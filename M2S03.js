//Card01
let notas1 = [8.0, 7.5, 6, 10.0];
function calc(notas) {
    let media = 0;

    notas.forEach(element => {
        media += element;
    });

    return media / notas.length;
}


//Card02
let media = calc(notas1);
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
    for (let i = 0; i <= 10; i++) {
        let element = n * i;
        tabela.innerHTML += `<tr><td class="primeiro">${i}</td><td class="segundo">${n} x ${i} = ${element}</td></tr>`
    }
}
//tabuada(8)


//Card05 - solicita 5 nomes
let pNomes = document.getElementById('nomes')
let infos = []
function cincoNomes() {
    let nome = prompt("Qual o nome do aluno?");
    let idade = prompt("Qual a idade do aluno?");
    let serie = prompt("Qual a série do aluno?");
    let escola = prompt("Qual o nome da escola?");
    let materia = prompt("Qual a sua matéria favorita?");

    infos.push(nome, idade, serie, escola, materia);

    let verify = confirm("Confirma as informações?");

    if (verify) {
        infos.forEach((nome) => {
            pNomes.innerHTML += `<br> ${nome}`;
        })
    } else { 
        nomesArray = []
        pNomes.innerHTML += `<br> Dados não confirmados!`;
     }
}
//cincoNomes()



//Card6 - sistema de entrada de notas
let obj = {
    nomeMateria:'',
    notas:[]
}

function materiaNotas(){
    let materia = prompt("Qual o nome da matéria?");
    obj.nomeMateria = materia;

    while(obj.notas.length < 4){
        let notas = prompt(`Digite a nota: `)
        obj.notas.push(notas);
    }

    let media = 0;
    obj.notas.forEach((nota) => {
        nota = +nota;
        media += nota;
    })
    return media/4;
}
//materiaNotas()



//Card07 
let meuArray = [1, 11, 22, 34, 67,83, 23, 2, 3, 9, 99, 14, 56]

function findMax(array) {
    let max = 0;
    array.forEach((elemento) => {
        if (elemento >= max) {max = elemento}
    })

    return console.log(max);
}
//findMax(meuArray)