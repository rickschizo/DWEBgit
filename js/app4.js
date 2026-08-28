let nasc = prompt("Digite o ano de nascimento: ");
nasc = parseInt(nasc);

let fds = confirm("se hoje for fim de semana clique em ok")
let idade = 2026 - nasc;

alert(`voce é maior de idade: ${idade >= 18}`)
alert(`hoje é fim de semana ${fds}`);

if(idade >= 18 && fds){
    alert("Voce pode beber")
}else{
    alert("Voce nao pode beber");
}