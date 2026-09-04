let vezes = Number(prompt("Digite a quantidade de vezes"));
for(let i = 1; i <= vezes; i++) {
    if (vezes > 100){
        alert("numero muito grande");
        break
    }
    alert(`contei ${i} vez`);
    if (i%2!=0){
        continue;
    }

    alert (`o numero ${i} é par`);
}