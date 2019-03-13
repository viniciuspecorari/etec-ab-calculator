var vl1=0, vl2=0, conta=0, operacao;

//Botões numéricos

$(document).on('click', '#btn1',function(){
   var valor;
   valor=$('#display').val();
   valor+="1";
   $('#display').val(valor);
});

$(document).on('click', '#btn2', function(){
  var valor;
  valor=$('#display').val();
  valor+="2";
  $('#display').val(valor);
});

$(document).on('click', '#btn3', function(){
  var valor;
  valor=$('#display').val();
  valor+="3";
  $('#display').val(valor);
});

$(document).on('click', '#btn4', function(){
  var valor;
  valor=$('#display').val();
  valor+="4";
  $('#display').val(valor);
});

$(document).on('click', '#btn5', function(){
  var valor;
  valor=$('#display').val();
  valor+="5";
  $('#display').val(valor);
});

$(document).on('click', '#btn6', function(){
  var valor;
  valor=$('#display').val();
  valor+="6";
  $('#display').val(valor);
});

$(document).on('click', '#btn7', function(){
  var valor;
  valor=$('#display').val();
  valor+="7";
  $('#display').val(valor);
});

$(document).on('click', '#btn8', function(){
  var valor;
  valor=$('#display').val();
  valor+="8";
  $('#display').val(valor);
});

$(document).on('click', '#btn9', function(){
  var valor;
  valor=$('#display').val();
  valor+="9";
  $('#display').val(valor);
});

$(document).on('click', '#btn0', function(){
  var valor;
  valor=$('#display').val();
  valor+="0";
  $('#display').val(valor);
});

//Limpar botão CE

$(document).on('click', '#ce', function(){
  $('#display').val("");
  operacao="";
  vl1="";
  vl2="";
  document.getElementById("display").style.color="black";
});

//Botões de operação / apenas vl1

$(document).on('click', '#maisao',function(){
  operacao="soma";
  var valor;
  valor=$('#display').val();
  vl1=parseInt(valor);
  valor="";
  $('#display').val(valor);
});

$(document).on('click', '#menusinho', function(){
  operacao="menos";
  var valor;
  valor=$('#display').val();
  vl1=parseInt(valor);
  valor="";
  $('#display').val(valor);
});

$(document).on('click', '#multi', function(){
  operacao="multi";
   var valor;
  valor=$('#display').val();
  vl1=parseInt(valor);
  valor="";
  $('#display').val(valor);
});

$(document).on('click', '#divi', function(){
  operacao="divi";
  var valor;
  valor=$('#display').val();
  vl1=parseInt(valor);
  valor="";
  $('#display').val(valor);
});

//Botão de Igualdade/Resultado

$(document).on('click', '#igual', function(){
  var valor = $('#display').val();
  vl2=parseInt(valor);
  $('#display').val("");
  if(operacao=="soma"){
    conta=vl1+vl2;
  }if(operacao =="menos"){
    conta=vl1-vl2;
  }if(operacao == "multi"){
    conta=vl1*vl2;
  }if(operacao == "divi"){
    conta=vl1/vl2;
  }
   document.getElementById("display").style.color="darkblue";
  $('#display').val(conta);
 
});