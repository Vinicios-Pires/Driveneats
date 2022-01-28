let comida = false;
let bebida = false;
let sobremesa = false;

// COMIDA
function selecionarComida(item) {

// DESELECIONANDO COMIDA
    document.getElementById("comida1").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida1").style.display = "none"

    document.getElementById("comida2").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida2").style.display = "none"

    document.getElementById("comida3").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida3").style.display = "none"
    
    document.getElementById("comida4").style.boxShadow = "inset 0 0 0 0px #32B72F";
    document.getElementById("selectComida4").style.display = "none"

// SELECIONANDO COMIDA
    if (item === 'comida1') {
    document.getElementById("comida1").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("selectComida1").style.display = "block"
    }else if (item === 'comida2') {
    document.getElementById("comida2").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("selectComida2").style.display = "block"
    }else if (item === 'comida3') {
    document.getElementById("comida3").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("selectComida3").style.display = "block"
    }else if (item === 'comida4') {
    document.getElementById("comida4").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("selectComida4").style.display = "block"  
    }      
    
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

    if (item === 'bebida1') {
        document.getElementById("bebida1").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida1").style.display = "block"
    } else if (item === 'bebida2') {
        document.getElementById("bebida2").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida2").style.display = "block"
    } else if (item === 'bebida3') {
        document.getElementById("bebida3").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida3").style.display = "block"   
    } else if (item === 'bebida4') {
        document.getElementById("bebida4").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectBebida4").style.display = "block"    
    }

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

    if (item === 'sobremesa1') {
        document.getElementById("sobremesa1").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa1").style.display = "block";
    } else if (item === 'sobremesa2') {
        document.getElementById("sobremesa2").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa2").style.display = "block";
    } else if (item === 'sobremesa3') {
        document.getElementById("sobremesa3").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa3").style.display = "block";
    } else if (item === 'sobremesa4') {
        document.getElementById("sobremesa4").style.boxShadow = "inset 0 0 0 5px #32B72F";
        document.getElementById("selectSobremesa4").style.display = "block";
    }

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