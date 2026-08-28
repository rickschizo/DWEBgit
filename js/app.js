var nasc = 2009
let nome = "rick"
const vivo = true

function calcIdade(ano=2026){ 
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false;
    }
    else{
        menor = false;
        var podebeber = true;
    }
    alert(`${nome} é menor de idade? ${menor}\n idade: ${idade}\n pode beber? ${podebeber}`);
    return idade;
}

calcIdade();
//alert(`Fora da Função : Idade ${Idade}`);
alert(`fora da Função : chamando calcIdade ${calcIdade(2027)}`);