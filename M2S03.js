const notas = [8.0, 7.5, 6, 10.0];

function calc(notas) {
    let media = 0;

    notas.forEach(element => {
        media += element;
    });

    return media / notas.length;
}

let media = calc(notas);

function mediaResponse(media) {
    if (media > 7) {
        document.write('<h2>Parabéns você passou na média!</h2>')
    } else {
        document.write('<h2>Infelizmente você está de recuperação.</h2>')
    } 
}

mediaResponse(media)