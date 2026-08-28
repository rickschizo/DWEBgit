let nasc = prompt("Digite o ano de nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("se voce esta vivo clique em ok");

if (viva) {
    alert(`voce tem ${2026 - nasc} anos`);
}else {
    alert("voce esta morto");
}