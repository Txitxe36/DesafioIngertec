
//CONTADORES DE IMAGEN 2 Y 4
const contador = document.getElementById("contar");
const contador2 = document.getElementById("contar2");
const sumar = document.getElementById("incr");
const sumar2 = document.getElementById("incr2");





let numero = 0;
let numero2 = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

sumar2.addEventListener("click", ()=>{
    numero2++;
    contador2.innerHTML = numero2;
});


// CONSEGUIR EL TEXTO DEL DOCUMENTO JSON CON AJAX
resultado = document.getElementById("info");

function ejecutarAJAX(){
   var respuesta;
   
   //DEPENDE DEL NAVEGADOR QUE SE USE
   if(window.XMLHttpRequest){
     respuesta = new XMLHttpRequest();
   }else{
     respuesta = new ActiveXObject("Microsoft.XMLHTTP");
   }

     respuesta.onreadystatechange = function(){
        //SI ESTÁ TODO OK
      if(respuesta.readyState === 4 && respuesta.status === 200){

   var textoAAparecer = JSON.parse(respuesta.responseText);
   console.log(textoAAparecer);
      if(resultado.innerHTML === ""){   
           resultado.innerHTML = textoAAparecer.texto;      
      }
    }
     }
respuesta.open("GET","file:///C:/Users/Usuario/Downloads/INGERTEC//home.json",true);
respuesta.send();
      };
      
 //FUNCIONES PARA CARGAR LOS POPUP DE LAS IMAGENES IMPARES
function cargarPopup()
{
    window.open('imagen1.html','','width=800,height=400,top=250,left=400,toolbar=no,titlebar=yes');
   
}

function cargarPopup3()
{
    window.open('imagen3.html','','width=800,height=400,top=250,left=400,toolbar=no,titlebar=yes');
   
}

function cargarPopup5()
{
    window.open('imagen5.html','','width=800,height=400,top=250,left=400,toolbar=no,titlebar=yes');
   
}

//BOTON DE COLORES
(function(){
setInterval(function(){
var btnColor = document.getElementById('colorBtn');

coloresdegradados =["#C5DE08"," #5ADE08","  #08A715 ","#4D5009","#5A6E77","#DFA402","#37220A"]

btnColor.style.color = coloresdegradados[Math.floor(Math.random() * coloresdegradados.length)];

},1000);
}());


