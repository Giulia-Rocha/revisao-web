document.addEventListener('DOMContentLoaded', function(){
    //lista de declarações a serem manipuladas
    const formulario = document.querySelector('#forms');
    const inputNome = document.querySelector('#idNome');
    const BotaoAdd = document.querySelector('#btnAdicionar');

    //função para adicionar um nome na lista
    let listaNomes=[];
    function addNomes(nome){
        if(nome!== undefined && nome !==""){
            listaNomes.push(nome);
            renderizaLista();
            inputNome.value="";
            console.log("nome inserido com sucesso!")
        }
        else{
            console.log("insira um nome")
        }
    }
    //criando uma função para imprimir os dados inseridos de forma eficiente.
    function renderizaLista(){
        lista.innerHTML="";
        for(let i=0;i<listaNomes.length; i++){
            const liElement = document.createElement("li");
            liElement.textContent = listaNomes[i];
            lista.appendChild(liElement);
        }
    }
    //chamando as funções
    BotaoAdd.addEventListener('click' ,function(e){
        e.preventDefault(); //nao deixa o campo se atualizar sozinho
        addNomes(inputNome.value);
    })
})