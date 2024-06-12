function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    for(let i = 0; i < quantidade; i++){
        numero = obter_numero_aleatorio(de, ate);
        while(sorteados.includes(numero)){
            numero = obter_numero_aleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
}

function obter_numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}