 
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e) {
 

e.preventDefault();
const inputValorA = e.target.querySelector('#valorA');
const inputValorB = e.target.querySelector('#valorB');
const inputValorC = e.target.querySelector('#valorC');

const valorA = Number(inputValorA.value);
const valorB = Number(inputValorB.value);
const valorC = Number(inputValorC.value);


function getConcavidade(valorA){
    if(valorA > 0){
        const concavidade = "Concavidade da parabola para cima";
        return concavidade;    
      } if(valorA < 0){
        const concavidade = "Concavidade da parabola  para baixo";
        return concavidade; 
    }
}

if(Number.isNaN(valorA) == true){
    setResultado_1('Valor do coeficiente A inválido');
    return
}

 if ((valorA == 0) || (valorA == "" ))
{
    setResultado_1('O coeficiente A: não pode ser vazio e deve ser diferente de zero!');
    return
} 

if (valorA == ""){
    setResultado_1('Digite o coeficiente A');
    return
} 

else if (valorB == ""){
    setResultado_1('Digite o coeficiente B');
    return
}
else if (valorC == ""){
    setResultado_1('Digite o coeficiente C');
    return
}

 
if(Number.isNaN(valorB)){
    setResultado_1('Valor do coeficiente B é inválido');
    return
}

if(Number.isNaN(valorC)){
    setResultado_1('Valor do coeficiente C é inválido');
    return
}




   const raiz_1 = getRaiz_1(valorA, valorB, valorC);  
   const raiz_2 = getRaiz_2(valorA, valorB, valorC);
   const concavidade = getConcavidade(valorA);  
   const msg_1 = `${concavidade}<br> O valor de X1 = ${raiz_1}<br>O valor de X2 = ${raiz_2}.`; 
   setResultado_1(msg_1, true);
   console.log(raiz_1);
   console.log(raiz_2);
   console.log(concavidade);
});
 

      

function getRaiz_1(valorA, valorB, valorC){
    const delta = (((valorB)**2) -4*(valorA)*(valorC));
    if (delta < 0){
        
        alert(" O valor do delta é negativo,logo, a equação não tem solução no conjunto dos reais.")
        msg_1.setResultado_1 = '';
    }
    const x1 = Math.sqrt(delta);
    const raiz_1 = ((- valorB + x1)/(2*valorA));    
    return raiz_1.toFixed(2);
      
}


function getRaiz_2(valorA, valorB, valorC){
    const delta = (((valorB)**2) -4*(valorA)*(valorC));
    const x2 = Math.sqrt(delta);
    const raiz_2 = ((- valorB - x2)/(2*valorA));    
    return raiz_2.toFixed(2);
    
}

 
function criarP () {
    const p = document.createElement(p);
   return p;
   }

 
function setResultado_1(msg_1, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';
 
    const p = criarP();
 
    if(isValid){
        p.classList.add('paragrafo-resultado');
     } else{
         p.classList.add('bad');
    }
   
 p.innerHTML = msg_1;
 resultado.appendChild(p);
   
}
 
function criarP(){
    const p = document.createElement('p');
    return p;
 
}
 