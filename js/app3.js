let n1 = Number(prompt("Digite o primeiro número"));
let n2 = Number(prompt("Digite o segundo número"));
let op;
do{
    let msg = "escolha uma opcao\n";
    msg = msg + "1 - somar\n";
    msg = msg + "2 - subtrair\n";
    msg = msg + "3 - multiplicar\n";
    msg = msg + "4 - dividir\n";
    msg = msg + "5 - sair\n";
    op = prompt(msg);
    switch(op){
        case "1": alert(`${n1} + ${n2} = ${n1+n2}`); break;
        case "2": alert(`${n1} - ${n2} = ${n1-n2}`); break;
        case "3": alert(`${n1} * ${n2} = ${n1*n2}`); break;
        case "4": alert(`${n1} / ${n2} = ${n1/n2}`); break;
        case "5": alert("saindo"); break;
        default: alert("opcao invalida"); break;
    }
}while(op != "5");