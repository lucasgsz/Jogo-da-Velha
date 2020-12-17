var tabuleiro = [
    {coluna1Linha1: ''},
    {coluna1Linha2: ''},
    {coluna1Linha3: ''},
    {coluna2Linha1: ''},
    {coluna2Linha2: ''},
    {coluna2Linha3: ''},
    {coluna3Linha1: ''},
    {coluna3Linha2: ''},
    {coluna3Linha3: ''}
    ];

//COL1LIN1

    function mudarvalor(){
        document.getElementById("bloco1").innerHTML = 'X';
        document.getElementById("dede").style.display = "none";
        document.getElementById("dudu").style.display = "none";
        tabuleiro[0].coluna1Linha1 = 'X';              
    }
    function mudarvalor1(){
        document.getElementById("bloco1").textContent = 'O';
        document.getElementById("dede").style.display = "none";
        document.getElementById("dudu").style.display = "none";
        tabuleiro[0].coluna1Linha1 = 'O';
    }

//COL1LIN2

    function mudarvalor2(){
        document.getElementById("bloco2").textContent = 'X';
        document.getElementById("botao2").style.display = "none";
        document.getElementById("botao3").style.display = "none";   
        tabuleiro[1].coluna1Linha2 = 'X';
    }
    function mudarvalor3(){
        document.getElementById("bloco2").textContent = 'O';
        document.getElementById("botao2").style.display = "none";
        document.getElementById("botao3").style.display = "none";
        tabuleiro[1].coluna1Linha2 = 'O';
    }

//COL1LIN3

    function mudarvalor4(){
        document.getElementById("bloco3").textContent = 'X';
        document.getElementById("botao4").style.display = "none";
        document.getElementById("botao5").style.display = "none";
        tabuleiro[2].coluna1Linha3 = 'X';
    }
    function mudarvalor5(){
        document.getElementById("bloco3").textContent = 'O';
        document.getElementById("botao4").style.display = "none";
        document.getElementById("botao5").style.display = "none";
        tabuleiro[2].coluna1Linha3 = 'O';
    }
        
//COL2LIN1

    function mudarvalor6(){
        document.getElementById("labelcentro1").textContent = 'X';
        document.getElementById("centro1").style.display = "none";
        document.getElementById("centro2").style.display = "none";
        tabuleiro[3].coluna2Linha1 = 'X';
    }
    function mudarvalor7(){
        document.getElementById("labelcentro1").textContent = 'O';
        document.getElementById("centro1").style.display = "none";
        document.getElementById("centro2").style.display = "none";
        tabuleiro[3].coluna2Linha1 = 'O';
    }
        
//COL2LIN2

    function mudarvalor8(){
        document.getElementById("labelcentro2").textContent = 'X';
        document.getElementById("centro3").style.display = "none";
        document.getElementById("centro4").style.display = "none";
        tabuleiro[4].coluna2Linha2 = 'X';
    }
    function mudarvalor9(){
        document.getElementById("labelcentro2").textContent = 'O';
        document.getElementById("centro3").style.display = "none";
        document.getElementById("centro4").style.display = "none";
        tabuleiro[4].coluna2Linha2 = 'O';
    }
        
//COL2LIN3

    function mudarvalor10(){
        document.getElementById("labelcentro3").textContent = 'X';
        document.getElementById("centro5").style.display = "none";
        document.getElementById("centro6").style.display = "none";
        tabuleiro[5].coluna2Linha3 = 'X';
    }
    function mudarvalor11(){
        document.getElementById("labelcentro3").textContent = 'O';
        document.getElementById("centro5").style.display = "none";
        document.getElementById("centro6").style.display = "none";
        tabuleiro[5].coluna2Linha3 = 'O';
    }
        
//COL3LIN1

    function mudarvalor12(){
        document.getElementById("labeldireita1").textContent = 'X';
        document.getElementById("direita1").style.display = "none";
        document.getElementById("direita2").style.display = "none";
        tabuleiro[6].coluna3Linha1 = 'X';
    }
    function mudarvalor13(){
        document.getElementById("labeldireita1").textContent = 'O';
        document.getElementById("direita1").style.display = "none";
        document.getElementById("direita2").style.display = "none";
        tabuleiro[6].coluna3Linha1 = 'O';
    }
        
//COL3LIN2

    function mudarvalor14(){
        document.getElementById("labeldireita2").textContent = 'X';
        document.getElementById("direita3").style.display = "none";
        document.getElementById("direita4").style.display = "none";
        tabuleiro[7].coluna3Linha2 = 'X';
    }
    function mudarvalor15(){
        document.getElementById("labeldireita2").textContent = 'O';
        document.getElementById("direita3").style.display = "none";
        document.getElementById("direita4").style.display = "none";
        tabuleiro[7].coluna3Linha2 = 'O';
    }
        
//COL3LIN3

    function mudarvalor16(){
        document.getElementById("labeldireita3").textContent = 'X';
        document.getElementById("direita5").style.display = "none";
        document.getElementById("direita6").style.display = "none";
        tabuleiro[8].coluna3Linha3 = 'X';
    }
    function mudarvalor17(){
        document.getElementById("labeldireita3").textContent = 'O';
        document.getElementById("direita5").style.display = "none";
        document.getElementById("direita6").style.display = "none";
        tabuleiro[8].coluna3Linha3 = 'O';
    }

// Verficar ganhador
function verifGanhador(){
var col1lin1 =  tabuleiro[0].coluna1Linha1;
var col1lin2 =  tabuleiro[1].coluna1Linha2;
var col1lin3 =  tabuleiro[2].coluna1Linha3;
var col2lin1 =  tabuleiro[3].coluna2Linha1;
var col2lin2 =  tabuleiro[4].coluna2Linha2;
var col2lin3 =  tabuleiro[5].coluna2Linha3;
var col3lin1 =  tabuleiro[6].coluna3Linha1;
var col3lin2 =  tabuleiro[7].coluna3Linha2;
var col3lin3 =  tabuleiro[8].coluna3Linha3;
// CONDICAO 1
if(col1lin1 === col1lin2 && col1lin1 === col1lin3 && col1lin1 === 'X'){ 
    alert('voce ganhou com o X!')
}else if(col1lin1 === col1lin2 && col1lin1 === col1lin3 && col1lin1 === 'O'){ 
    alert('voce ganhou com o O!')
}
//CONDICAO 2
if(col2lin1 === col2lin2 && col2lin1 === col2lin3 && col2lin1 === 'X'){ 
    alert('voce ganhou!')
}else if(col2lin1 === col2lin2 && col2lin1 === col2lin3 && col2lin1 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 3
if(col3lin1 === col3lin2 && col3lin1 === col3lin3 && col3lin1 === 'X'){ 
    alert('voce ganhou!')
}else if(col3lin1 === col3lin2 && col3lin1 === col3lin3 && col3lin1 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 4
if(col1lin1 === col2lin1 && col1lin1 === col3lin1 && col1lin1 === 'X'){ 
    alert('voce ganhou!')
}else if(col1lin1 === col2lin1 && col1lin1 === col3lin1 && col1lin1 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 5
if(col1lin2 === col2lin2 && col1lin2 === col3lin2 && col1lin2 === 'X'){ 
    alert('voce ganhou!')
}else if(col1lin2 === col2lin2 && col1lin2 === col3lin2 && col1lin2 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 6
if(col1lin3 === col2lin3 && col1lin3 === col3lin3 && col1lin3 === 'X'){ 
    alert('voce ganhou!')
}else if(col1lin3 === col2lin3 && col1lin3 === col3lin3 && col1lin3 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 7
if(col1lin1 === col2lin2 && col1lin1 === col3lin3 && col1lin1 === 'X'){ 
    alert('voce ganhou!')
}else if(col1lin1 === col2lin2 && col1lin1 === col3lin3 && col1lin1 === 'O'){ 
    alert('voce ganhou!')
}
//CONDICAO 8
if(col3lin1 === col2lin2 && col3lin1 === col1lin3 && col3lin1 === 'X'){ 
    alert('voce ganhou!')
}else if(col3lin1 === col2lin2 && col3lin1 === col1lin3 && col3lin1 === 'O'){ 
    alert('voce ganhou!')
}
}