let comida = false;
let bebida = false;
let sobremesa = false;
let nomeComida, nomeBebida, nomeSobremesa;
let precoComida, precoBebida, precoSobremesa;

// COMIDA
function selecionarComida(item) {

// DESELECIONANDO COMIDA
    document.getElementById("comida1").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida1").style.display = "none";

    document.getElementById("comida2").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida2").style.display = "none";

    document.getElementById("comida3").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida3").style.display = "none";
    
    document.getElementById("comida4").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida4").style.display = "none";

    let selecionadoAnteriormente = document.querySelector(".comida .selecionado");
    if (selecionadoAnteriormente !== null) {
        selecionadoAnteriormente.classList.remove("selecionado");
    }

    // SELECIONANDO COMIDA
    if (item === 'comida1') {
        document.getElementById("comida1").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectComida1").style.display = "block";
        const selecionado = document.getElementById("comida1");
        selecionado.classList.add("selecionado");
    } else if (item === 'comida2') {
        document.getElementById("comida2").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectComida2").style.display = "block";
        const selecionado = document.getElementById("comida2");
        selecionado.classList.add("selecionado");
    } else if (item === 'comida3') {
        document.getElementById("comida3").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectComida3").style.display = "block";
        const selecionado = document.getElementById("comida3");
        selecionado.classList.add("selecionado");    
    } else if (item === 'comida4') { 
        document.getElementById("comida4").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectComida4").style.display = "block";
        const selecionado = document.getElementById("comida4");
        selecionado.classList.add("selecionado");  
    }      
    
    const preco = document.querySelector(".comida .selecionado .preco")
    const nome = document.querySelector(".comida .selecionado .titulo")
    nomeComida = nome.innerHTML
    precoComida = preco.innerHTML


    let textoComida = document.querySelector(".compras .produto-e-preco .produto-comida");
    textoComida.innerHTML = nomeComida

    let precoComida1 = document.querySelector(".compras .produto-e-preco .preco-comida");
    precoComida1.innerHTML = precoComida;


    comida = true;
    mudarBotao()
}

// SELECIONANDO BEBIDA 1
function selecionarBebida(item) {
    
// DESELECIONANDO BEBIDA 2 3 4
    document.getElementById("bebida1").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectBebida1").style.display = "none"

    document.getElementById("bebida2").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectBebida2").style.display = "none"
    
    document.getElementById("bebida3").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectBebida3").style.display = "none"
    
    document.getElementById("bebida4").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectBebida4").style.display = "none"

    let selecionadoAnteriormente = document.querySelector(".drinks .selecionado");
    if (selecionadoAnteriormente !== null) {
        selecionadoAnteriormente.classList.remove("selecionado");
    }

    if (item === 'bebida1') {
        document.getElementById("bebida1").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida1").style.display = "block"
        const selecionado = document.getElementById("bebida1");
        selecionado.classList.add("selecionado");
    } else if (item === 'bebida2') {
        document.getElementById("bebida2").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida2").style.display = "block"
        const selecionado = document.getElementById("bebida2");
        selecionado.classList.add("selecionado");
    } else if (item === 'bebida3') {
        document.getElementById("bebida3").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida3").style.display = "block"
        const selecionado = document.getElementById("bebida3");
        selecionado.classList.add("selecionado");   
    } else if (item === 'bebida4') {
        document.getElementById("bebida4").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida4").style.display = "block"
        const selecionado = document.getElementById("bebida4");
        selecionado.classList.add("selecionado");    
    }

    const preco = document.querySelector(".drinks .selecionado .preco")
    const nome = document.querySelector(".drinks .selecionado .titulo")
    nomeBebida = nome.innerHTML
    precoBebida = preco.innerHTML


    let textoBebida = document.querySelector(".compras .produto-e-preco .produto-bebida");
    textoBebida.innerHTML = nomeBebida;

    let precoBebida1 = document.querySelector(".compras .produto-e-preco .preco-bebida");
    precoBebida1.innerHTML = precoBebida;


    bebida = true;
    mudarBotao()
}

// SELECIONANDO SOBREMESA 1
function selecionarSobremesa(item) {
    document.getElementById("sobremesa1").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("selectSobremesa1").style.display = "block";
    
// DESELECIONANDO SOBREMESA 2 3 4
    document.getElementById("sobremesa1").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectSobremesa1").style.display = "none";
    
    document.getElementById("sobremesa2").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectSobremesa2").style.display = "none";
    
    document.getElementById("sobremesa3").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectSobremesa3").style.display = "none";
    
    document.getElementById("sobremesa4").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectSobremesa4").style.display = "none";

    let selecionadoAnteriormente = document.querySelector(".sobremesa .selecionado");
    if (selecionadoAnteriormente !== null) {
        selecionadoAnteriormente.classList.remove("selecionado");
    }

    if (item === 'sobremesa1') {
        document.getElementById("sobremesa1").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa1").style.display = "block";
        const selecionado = document.getElementById("sobremesa1");
        selecionado.classList.add("selecionado");
    } else if (item === 'sobremesa2') {
        document.getElementById("sobremesa2").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa2").style.display = "block";
        const selecionado = document.getElementById("sobremesa2");
        selecionado.classList.add("selecionado");
    } else if (item === 'sobremesa3') {
        document.getElementById("sobremesa3").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa3").style.display = "block";
        const selecionado = document.getElementById("sobremesa3");
        selecionado.classList.add("selecionado");
    } else if (item === 'sobremesa4') {
        document.getElementById("sobremesa4").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa4").style.display = "block";
        const selecionado = document.getElementById("sobremesa4");
        selecionado.classList.add("selecionado");
    }

    const preco = document.querySelector(".sobremesa .selecionado .preco")
    const nome = document.querySelector(".sobremesa .selecionado .titulo")
    nomeSobremesa = nome.innerHTML
    precoSobremesa = preco.innerHTML


    let textoSobremesa = document.querySelector(".compras .produto-e-preco .produto-sobremesa");
    textoSobremesa.innerHTML = nomeSobremesa;

    let precoSobremesa1 = document.querySelector(".compras .produto-e-preco .preco-sobremesa");
    precoSobremesa1.innerHTML = nomeSobremesa;


    sobremesa = true;
    mudarBotao()
}

function mudarBotao(){
    if (comida && bebida && sobremesa) {
        const botao = document.querySelector(".nao-fechado");
        botao.classList.add("display-none");
        const botaoVerde = document.querySelector(".fechado");
        botaoVerde.classList.add("display-flex");
    }
}

function telaConfirmacao(){
    const telaConfirmacao = document.querySelector(".pop-up-pai");
    telaConfirmacao.classList.add("display-flex")
}


function cancelarPedido() {
    const cancelar = document.querySelector(".pop-up-pai");
    cancelar.classList.remove("display-flex")
}


function wpp(){
    let valorComida = parseFloat(precoComida.replace("R$", "").replace(",", "."));
    let valorBebida = parseFloat(precoBebida.replace("R$", "").replace(",", "."));
    let valorSobremesa = parseFloat(precoSobremesa.replace("R$", "").replace(",", "."));
    let nomePessoa = prompt("Qual seu nome?");
    let endereco = prompt("Digite seu endereço");

    total = valorComida + valorBebida + valorSobremesa;

    let textoPrecoTotal = document.querySelector(".compras .total .preco-total");
    textoPrecoTotal.innerHTML = "R$" + total.toFixed(2);

    let wpp = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    -Prato: ${nomeComida}
    -Bebida: ${nomeBebida}
    -Sobremesa: ${nomeSobremesa}
    Total: R$ ${total.toFixed(2)}
    
    Nome: ${nomePessoa}
    Endereço: ${endereco}`);

    window.open(`https://wa.me/5514981996853?text=${wpp}`);

}