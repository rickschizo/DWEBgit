let dia = prompt("escolha um dia da semana \n sendo 1: domingo - 7: sabado");
dia = Number(dia);
switch(dia){
    case 1: alert("Domingo");
    case 2: alert("Segunda-feira");
    case 3: alert("Terça-feira");
    case 4: alert("Quarta-feira");
    case 5: alert("Quinta-feira");
    case 6: alert("Sexta-feira");
    case 7: alert("Sábado");
    default: alert("Dia invalido");
}
