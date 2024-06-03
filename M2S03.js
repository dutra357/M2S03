const notas = [8.0, 7.5, 6, 10.0];

function calc(notas) {
    let media = 0;

    notas.forEach(element => {
        media += element;
    });

    return media / notas.length;
}

console.log(calc(notas))