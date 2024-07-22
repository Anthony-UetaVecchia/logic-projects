let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado');
        resetNome();
        return;
    }

    amigos.push(amigo.value);
    let listaAmigos = document.getElementById('lista-amigos');
    if(amigos.length >= 1){
        listaAmigos.textContent =  amigos.join(', ');
    }
    
    resetNome();
}
function sortear(){
    if(amigos.length <= 2){
        alert('A lista deve ter no mínimo 3 participantes');
        return
    }else{
        embaralha(amigos);
        resetSorteio();
        let listaSorteio = document.getElementById('lista-sorteio');
        for(let i = 0; i < amigos.length; i++){
            if(i == amigos.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
            }else{
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
            }
        }
    }
}
function reiniciar(){
    resetNome();
    resetSorteio();
    document.getElementById('lista-amigos').innerHTML = '';
    amigos = [];
}
function resetNome(){
    document.getElementById('nome-amigo').value = '';
}
function resetSorteio(){
    document.getElementById('lista-sorteio').innerHTML = '';
}
function embaralha(lista) {

    let indice = lista.length;
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}
