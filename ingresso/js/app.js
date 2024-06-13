// The code that I implemented with my own logic
// let pista = parseInt(document.getElementById('qtd-pista').textContent);
// let superior = parseInt(document.getElementById('qtd-superior').textContent);
// let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

// function comprar(){
//     let tipoIngresso = document.getElementById('tipo-ingresso').value;
//     let qtd = document.getElementById('qtd').value;

//     if(tipoIngresso  == 'pista' && pista === 0 || tipoIngresso  == 'superior' && superior === 0 || tipoIngresso  == 'inferior' && inferior === 0){
//         alert('Ingressos Esgotados');
//         return
//     }else if(tipoIngresso  == 'pista'){
//         pista = pista - qtd;
//         document.getElementById('qtd-pista').textContent = pista;
//     }else if(tipoIngresso  == 'superior'){
//         superior = superior - qtd;
//         document.getElementById('qtd-superior').textContent = superior;
//     }else if(tipoIngresso  == 'inferior'){
//         inferior = inferior - qtd;
//         document.getElementById('qtd-inferior').textContent = inferior;
//     }
   
// }
// The code with the logic from the class, adaptated a bit with my logic
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd');
    if (tipoIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(qtd);
    } else if (tipoIngresso == 'inferior') {
        comprarInferior(qtd);
    }    
}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-pista').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-pista').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}