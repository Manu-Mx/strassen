

function obtenerDatos() {
    var tam = parseFloat(document.getElementById('tamMatriz').value);
    document.matrizN.tamMatriz.value = tam;
    window.alert(tam);
}
//PRUEBA DE EXPORTACION DE FUNCIONES
/*const exp =  require("./strassen.js");

function f1(){
    var M = exp.Matriz.new(2,2,"MatrizA");
    console.log(M.name);
    console.log("Saludo");
};

f1();
/*
var tama = 2;
var A = exp.Matriz.new(tama,tama,"A");
var B = exp.Matriz.new(tama,tama,"B");
var C;
var cont = 1;
console.log("Matriz A");
//ingresa datos a matriz A
for(var i =0 ; i<tama;i++){
  for(var j =0 ; j<tama;j++){
    A.set(i,j,cont); 
    cont++;
  }
}
//verifica datos en matriz A
for(var i =0 ; i<tama;i++){
  for(var j =0 ; j<tama;j++){
    console.log(A.get(i,j));
  }
}
console.log("Matriz B");
//ingresa datos a matriz B
for(var i =0 ; i<tama;i++){
  for(var j =0 ; j<tama;j++){
    B.set(i,j,cont);
    cont++;
  }
}
//verifica datos en matriz B
for(var i =0 ; i<tama;i++){
  for(var j =0 ; j<tama;j++){
    console.log(B.get(i,j));
  }
}
//Multiplicacion de matrices por Strassen
C = exp.Matriz.strassenMatrixMul(A,B,tama);//tengo duda con el ultimo parametro de esta funcion
console.log("Matriz C");
for(var i =0 ; i<tama;i++){
  for(var j =0 ; j<tama;j++){
    console.log(C.get(i,j));
  }
}*/
/*var btn = document.getElementById('prueba'),
    //caja = document.getElementById('caja'),
    //caj2 = document.getElementById('caja2'),
    cajSMa = document.getElementById('cajaSMa'),
    cajSMb = document.getElementById('cajaSMb'),
    contador = 0;

    function empezarAnimacion() {
      if(contador == 0){
        //caja.classList.add('animar');
        //caja2.classList.add('animar');
        cajaSMa.classList.add('animar');
        cajaSMb.classList.add('animar');
        contador = 1;
      }
      else {
        //caja.classList.remove('animar');
        //caja2.classList.remove('animar');
        cajaSMa.classList.remove('animar');
        cajaSMb.classList.remove('animar');
        contador = 0;
      }
    }

    btn.addEventListener('click',empezarAnimacion,true);*/